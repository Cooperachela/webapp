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



//controladores
app.controller('reportaCtrl', ['$scope','$filter','$mdDialog','$window',
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

$scope.modal = function(ev){					
	$mdDialog.show(
						$mdDialog.alert()
						.parent(angular.element(document.body))
						.title('Pedido Solicitado!')
						.content('Se ha realizado su pedido: '+$scope.doctos.id+', por un total de :'+$scope.doctos.total+' esta pagado y puede pasar a recogerlo!.' )
						.ariaLabel('ok')
						.ok('Aceptar')
						.targetEvent(ev)
						);
};



}
  ]);


	
	