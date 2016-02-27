var app=angular.module('reportApp',['ngMaterial']); 
//config de la app
app.config(['$httpProvider', function($httpProvider) 
{	
  if (!$httpProvider.defaults.headers.get) {
      $httpProvider.defaults.headers.get = {};    
  	}        
  $httpProvider.defaults.headers.get['If-Modified-Since'] = 'Mon, 26 Jul 1997 05:00:00 GMT';
  $httpProvider.defaults.headers.get['Cache-Control'] = 'no-cache';
  $httpProvider.defaults.headers.get['Pragma'] = 'no-cache';	
}]);

//servicios REST
app.service('ServiciosReportar',['$http','$q',function($http,$q)
{  	
this.consultaDatos = 
		function( json )
		{
			var deferred= $q.defer();  
			$http.defaults.headers.common['Accept']='application/json';
			$http.defaults.headers.common['Accept-Language']='ES';
			$http.defaults.headers.common['Content-Type']='application/json;charset=UTF-8';				
			$http.post('http://www3.inegi.org.mx/sistemas/mapa/Denue/ajaxpro/DENUE.BusquedasQ,DENUE.ashx', 
					{
					headers: {
						 'Accept' : 'text/html,azplication/xhtml+xml,application/xml;q=0.9,/;q=0.8',
						 'Accept-Encoding' :'gzip, deflate',
						 'Accept-Language' :'es-MX,es-ES;q=0.9,es;q=0.7,es-AR;q=0.6,es-CL;q=0.4,en-US;q=0.3,en;q=0.1',
						 'Content-Length' :'30',
						 'Content-Type' :'text/plain; charset=utf-8',
						 'Cookie' :'LBSesID=ffffffff09911c0d45525d5f4f58455e445a4a423660; utma=150191593.1877187798.1456594895.1456594895.1456594895.1; utmc=150191593; __utmz=150191593.1456594895.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none)',
						 'Host' :'www3.inegi.org.mx',
						 'Referer' : 'http://www3.inegi.org.mx/sistemas/mapa/denue/',
						 'User-Agent' : 'Mozilla/5.0 (Windows NT 10.0; WOW64; rv:44.0) Gecko/20100101 Firefox/44.0',
						 'X-AjaxPro-Method' : 'BallonResultado'
						,
						},data: json  
					}
					)
			.success(	function(data)
					{ 
						deferred.resolve(data);  
					}   
					)  
			.error(		function(data) 
					{
						deferred.reject(data);
					}
					);
		return deferred.promise;
		};									
}]);

//controladores
app.controller('reportaCtrl', ['$scope','ServiciosReportar','$filter','$mdDialog','$window',
function ($scope,ServiciosReportar,$filter,$mdDialog,$window) 
{  	
$scope.loading = false;
$scope.doctos=[];
$scope.doctosImpresion=[];
$scope.hash=[];
$scope.cdunieco=[];
 
$scope.inicio = function(){	
	console.log("inicio Angular");
};

$scope.localiza = function(ev){				
		
	if($scope.Generados>0 && $scope.tipoSolicitud != 0){
	 var confirm = $mdDialog.confirm()
     .title('¿Generar nuevo reporte?')     
     .content('Ya genero un reporte previamente, ¿Esta seguro que desea generar un nuevo reporte?.')
     .ariaLabel('Nuevo Reporte')
     .targetEvent(ev)
     .ok('Si')
     .cancel('No');
	 $mdDialog.show(confirm).then(function() {		 
		 reportarDatos();
	 }, function() {
		 $scope.status = 'No';
	 });	
	
	}else{
		reportarDatos();		
	}
	
};

function reportarDatos(){		
	var jsonSolicitud = 
	{
			"condicion":"((CONTAINS(DE.BUSQUEDA,''FORMSOF(INFLECTIONAL,Cerveza)''))) AND (DE.entidad_id=''09'')"
			,"inic":"0","topeT":"100"
	};	
	
	var promesa = ServiciosReportar.consultaDatos(jsonSolicitud);
		promesa.then
		(
		function(datos){
			$scope.doctos = datos;			
		}
		,function(exception)
		{	
			console.log('Error de servicios');			
		}
		);	
	}
}
  ]);


	
	