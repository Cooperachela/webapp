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
			$http.get('./api/u',
					{headers: {
						'Accept' : 'text/html,azplication/xhtml+xml,application/xml;q=0.9,/;q=0.8',
						 'Accept-Encoding' :'gzip, deflate',
						 'Accept-Language' :'es-MX,es-ES;q=0.9,es;q=0.7,es-AR;q=0.6,es-CL;q=0.4,en-US;q=0.3,en;q=0.1',
						 'Content-Length' :'30',
						 'Content-Type' :'text/plain; charset=utf-8',
						 'Cookie' :'LBSesID=ffffffff09911c0d45525d5f4f58455e445a4a423660; utma=150191593.1877187798.1456594895.1456594895.1456594895.1; utmc=150191593; __utmz=150191593.1456594895.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none)',
						 'Host' :'www3.inegi.org.mx',
						 'Referer' : 'http://www3.inegi.org.mx/sistemas/mapa/denue/',
						 'User-Agent' : 'Mozilla/5.0 (Windows NT 10.0; WOW64; rv:44.0) Gecko/20100101 Firefox/44.0',
						 'X-AjaxPro-Method' : 'BallonResultado'},data: json  })					
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
		
		this.detalleSiniestro = 
			function( parameter )
			{
				var deferred= $q.defer();  
				$http.defaults.headers.common['Accept']='application/json';
				$http.defaults.headers.common['Accept-Language']='ES';
				$http.defaults.headers.common['Content-Type']='application/json;charset=UTF-8';		
				$http.get('.//api/c/json/'+parameter,
						{headers: {
							'Accept' : 'text/html,azplication/xhtml+xml,application/xml;q=0.9,/;q=0.8',
							 'Accept-Encoding' :'gzip, deflate',
							 'Accept-Language' :'es-MX,es-ES;q=0.9,es;q=0.7,es-AR;q=0.6,es-CL;q=0.4,en-US;q=0.3,en;q=0.1',
							 'Content-Length' :'30',
							 'Content-Type' :'text/plain; charset=utf-8',
							 'Cookie' :'LBSesID=ffffffff09911c0d45525d5f4f58455e445a4a423660; utma=150191593.1877187798.1456594895.1456594895.1456594895.1; utmc=150191593; __utmz=150191593.1456594895.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none)',
							 'Host' :'www3.inegi.org.mx',
							 'Referer' : 'http://www3.inegi.org.mx/sistemas/mapa/denue/',
							 'User-Agent' : 'Mozilla/5.0 (Windows NT 10.0; WOW64; rv:44.0) Gecko/20100101 Firefox/44.0',
							 'X-AjaxPro-Method' : 'BallonResultado'},data: parameter  })					
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
	var query_string = {};
	  var query = window.location.search.substring(1); 
	  var vars = query.split("&");
	  for (var i=0;i<vars.length;i++) {
	    var pair = vars[i].split("=");
	    if (typeof query_string[pair[0]] === "undefined") {
	      query_string[pair[0]] = decodeURIComponent(pair[1]);
	    } else if (typeof query_string[pair[0]] === "string") { 
	      var arr = [ query_string[pair[0]],decodeURIComponent(pair[1]) ];
	      query_string[pair[0]] = arr;
	    } else {
	      query_string[pair[0]].push(decodeURIComponent(pair[1]));
	    }
	  }
	var query=query_string;
	P_hash=query.hash;	
	$scope.pedido=P_hash;	
	
$scope.loading = false;
$scope.doctos=[];
$scope.doctosImpresion=[];
$scope.hash=[];
$scope.cdunieco=[];
 
$scope.inicio = function(){	
	console.log("inicio Angular");
};

$scope.localiza = function(ev){					
	reportarDatos();
};

$scope.enviaMail = function(ev){	
	console.log('enviaCorreo');
	var promesa = ServiciosReportar.consultaDatos();
	promesa.then
	(
			function(datos)
		{
			$scope.doctos = datos;   	
	
			var promesa = ServiciosReportar.detalleSiniestro($scope.pedido);
			promesa.then
			(
					function(datos)
				{
					$scope.doctos = datos;   	
					
					
					console.log($scope.doctos );
					$mdDialog
					.show(
						$mdDialog.alert()
						.parent(angular.element(document.body))
						.title('Pedido Solicitado!')
						.content('Se ha realizado su pedido: '+$scope.pedido+', por un total de :'+scope.doctos.total+' esta pagado y puede pasar a recogerlo!.' )
						.ariaLabel('ok')
						.ok('Aceptar')
						.targetEvent(ev)
						);	
				}
				,function(exception)
				{	
					
					$mdDialog
					.show(
						$mdDialog.alert()
						.parent(angular.element(document.body))
						.title('Reintentar!')
						.content('No fue posible conectar a los servicios, favor de reintentar nuevamente.')
						.ariaLabel('ok')
						.ok('Aceptar')
						.targetEvent(ev)
						);	
				}
			);		
		}
		,function(exception)
		{	
			
			$mdDialog
			.show(
				$mdDialog.alert()
				.parent(angular.element(document.body))
				.title('Reintentar!')
				.content('No fue posible conectar a los servicios, favor de reintentar nuevamente.')
				.ariaLabel('ok')
				.ok('Aceptar')
				.targetEvent(ev)
				);	
		}
	);		
};

function reportarDatos(){		
	var jsonSolicitud = 
	{
			"condicion":"((CONTAINS(DE.BUSQUEDA,''FORMSOF(INFLECTIONAL,Cerveza)''))) AND (DE.entidad_id=''09'')"
			,"inic":"0","topeT":"100"
	};	
	
	$scope.doctos = [['19.33958466','-99.20774412','43','927732','MODELORAMA'],['19.41917331','-99.08817107','46','667018','ABARROTES MODELORAMA'],['19.37491056','-99.20234181','46','1057912','ABARROTES MODELORAMA 999'],['19.33336218','-99.12362977','46','979599','CERVECENTRO MODELORAMA'],['19.54712006','-99.13605960','46','670194','DEPÓSITO DE CERVEZA MODELORAMA'],['19.46354400','-99.09380418','46','801618','DEPOSITO DE CERVEZA MODELORAMA'],['19.26095697','-99.10588064','46','988158','DEPOSITO DE CERVEZA MODELORAMA'],['19.54821524','-99.15463791','46','635933','DEPÒSITO DE CERVEZA MODELORAMA BRISA'],['19.55068912','-99.15077359','46','636032','DEPÓSITO DE CERVEZA MODELORAMA JALISCO'],['19.49880838','-99.08590710','46','766893','DEPÓSITO DE CERVEZAS MODELORAMA'],['19.19345956','-99.02014477','46','878194','LOCAL MISCELÁNEA MODELORAMA'],['19.28224378','-99.22090970','46','853858','MISCELÁNEA MODELORAMA'],['19.52604891','-99.14315718','46','655458','MISCELÁNEA MODELORAMA'],['19.32830546','-99.16546206','46','996939','MISCELÁNEA MODELORAMA'],['19.45596913','-99.05425740','46','819707','MISCELÁNEA MODELORAMA POPES'],['19.52056301','-99.13479762','46','656070','MODELORAMA'],['19.45494400','-99.08702438','46','806085','MODELORAMA'],['19.50136806','-99.08915862','46','759482','MODELORAMA'],['19.47106236','-99.08655524','46','678605','MODELORAMA'],['19.46062145','-99.10351258','46','795867','MODELORAMA'],['19.48915556','-99.18368784','46','683647','MODELORAMA'],['19.48583979','-99.21164832','46','682813','MODELORAMA'],['19.31052160','-99.15028719','46','1008986','MODELORAMA'],['19.31574596','-99.14830846','46','911045','MODELORAMA'],['19.47313587','-99.15343627','46','684296','MODELORAMA'],['19.31565525','-99.11077754','46','983797','MODELORAMA'],['19.31651751','-99.14000133','46','1007142','MODELORAMA'],['19.49139902','-99.18291876','46','681542','MODELORAMA'],['19.28033032','-99.17771490','46','855532','MODELORAMA'],['19.28941453','-99.05562894','46','1048189','MODELORAMA'],['19.29720867','-99.14868583','46','859570','MODELORAMA'],['19.24740593','-99.05676591','46','938522','MODELORAMA'],['19.38662192','-99.14080315','46','965393','MODELORAMA'],['19.45219831','-99.18540233','46','6719178','MODELORAMA'],['19.45158557','-99.12217408','46','693512','MODELORAMA'],['19.44152586','-99.12108657','46','695342','MODELORAMA'],['19.45956630','-99.19105175','46','753052','MODELORAMA'],['19.44779099','-99.20195976','46','751264','MODELORAMA'],['19.44448744','-99.14369639','46','984275','MODELORAMA'],['19.44202491','-99.15817700','46','1010467','MODELORAMA'],['19.44905392','-99.19115951','46','754486','MODELORAMA'],['19.44843340','-99.15711983','46','877142','MODELORAMA'],['19.35965441','-99.14146139','46','904645','MODELORAMA'],['19.34421687','-99.06449591','46','722613','MODELORAMA'],['19.35638948','-98.99677028','46','732816','MODELORAMA'],['19.35733459','-99.23523943','46','1037726','MODELORAMA'],['19.37311118','-99.20798306','46','924038','MODELORAMA'],['19.35032673','-99.21840598','46','993743','MODELORAMA'],['19.34280098','-98.99200555','46','821738','MODELORAMA'],['19.35440621','-99.10830236','46','661846','MODELORAMA'],['19.30543288','-99.07368605','46','839297','MODELORAMA'],['19.35212435','-99.11952357','46','662361','MODELORAMA'],['19.39919888','-99.11864318','46','706277','MODELORAMA'],['19.39387105','-99.11696063','46','707109','MODELORAMA'],['19.33216315','-99.03400871','46','842230','MODELORAMA ABUNDANCIA Y PROSPERIDAD'],['19.39339313','-99.06142595','46','811713','MODELORAMA AGRÍCOLA'],['19.44520592','-99.17174958','46','686789','MODELORAMA ANÁHUAC (VENTA DE CERVEZA)'],['19.47294190','-99.17546269','46','739484','MODELORAMA AQUILESELORDUY'],['19.41314782','-99.13312077','46','900723','MODELORAMA AVENIDA DEL TALLER'],['19.30362027','-99.06742809','46','835454','MODELORAMA CLAVELES'],['19.41608496','-99.17810183','46','866463','MODELORAMA CONDESA'],['19.45178427','-99.10534556','46','677641','MODELORAMA CORONA'],['19.32930994','-99.12653526','46','979541','MODELORAMA DEPÓSITO DE CERVEZA'],['19.35932498','-99.25487802','46','1037428','MODELORAMADEPÓSITO DE CERVEZA'],['19.37238044','-99.28776199','46','998159','MODELORAMA DON ROYER'],['19.37912282','-99.20860504','46','1056184','MODELORAMA EL COMPA'],['19.49119592','-99.21404712','46','641110','MODELORAMAEL PERIQUITO'],['19.47343645','-99.21495296','46','652184','MODELORAMA EL TRIUNFO'],['19.30099230','-99.24839140','46','931601','MODELORAMA EMILIO CARRANZA'],['19.41805455','-99.14717224','46','951320','MODELORAMAERAZO'],['19.44897050','-99.19590162','46','754328','MODELORAMA ERNE'],['19.41005190','-99.05918477','46','6352380','MODELORAMA ESMERALDA'],['19.33463060','-99.05999373','46','830731','MODELORAMA FRANCISCO VILLA'],['19.35344105','-99.31676820','46','878406','MODELORAMA GARCÍA'],['19.35730115','-99.11355940','46','661534','MODELORAMA JACK'],['19.37514650','-99.03823722','46','769606','MODELORAMA JAICO'],['19.27498703','-99.00520246','46','944847','MODELORAMA LA ASUNCION'],['19.39541918','-99.18647941','46','871227','MODELORAMA LA BRASILEÑA'],['19.31687120','-99.15956465','46','1002513','MODELORAMA LA GOTA FELIZ'],['19.39574789','-99.20831338','46','1023528','MODELORAMA LA VICTORIA ES NUESTRA'],['19.37847300','-99.13847720','46','967696','MODELORAMA LAGO'],['19.28180032','-99.22850412','46','853718','MODELORAMA LAS TORRES'],['19.35194438','-99.31829299','46','921960','MODELORAMA LOSAN'],['19.34549214','-98.99799420','46','733307','MODELORAMA M3XICO'],['19.39250776','-99.09899193','46','795958','MODELORAMA ORIENTE'],['19.39240827','-99.05035137','46','756181','MODELORAMA PATY'],['19.31904272','-99.24583880','46','930500','MODELORAMA PIRUL 1'],['19.47558128','-99.06540873','46','845149','MODELORAMA POPOCATÉPETL'],['19.37665563','-99.21986454','46','923307','MODELORAMA PRESIDENTES'],['19.43725092','-99.15287614','46','889874','MODELORAMARAMOS ARIZPE'],['19.33017118','-99.10716425','46','828708','MODELORAMA SAN ANDRÉS'],['19.51998857','-99.12947172','46','672491','MODELORAMA SAN JUAN'],['19.31244434','-99.06823496','46','834395','MODELORAMA SAN LORENZO'],['19.38748548','-99.21621300','46','1014272','MODELORAMA SANTA FE'],['19.39090282','-99.12900717','46','789705','MODELORAMA SANTIAGO'],['19.21053998','-99.04844261','46','951218','MODELORAMA SIN NOMBRE'],['19.25804744','-99.00835987','46','957327','MODELORAMA SIN NOMBRE'],['19.43585977','-99.11907269','46','695738','MODELORAMA SIN NOMBRE'],['19.46752899','-99.12247737','46','675556','MODELORAMA TIENDA DE ABARROTES'],['19.38545766','-99.13901312','46','903100','MODELORAMA TLALPAN'],['19.25663420','-99.02220202','46','1038248','MODELORAMA TULYEHUALCO'],['19.46114166','-99.16274921','46','741306','MODELORAMA VERBENA'],['19.36865455','-99.13718274','46','711901','MODELORAMA VICTOR HUGO'],['19.26796563','-99.12383718','46','972854','MODELORAMA XOCHIMILCO'],['19.21863351','-99.20430318','46','1053778','SUPERG MODELORAMA'],['19.53098441','-99.14116456','46','644161','TIENDA DE ABARROTES MODELORAMA'],['19.36126565','-99.09378197','46','750838','TIENDA DE ABARROTES MODELORAMA LA PAZ'],['19.47360948','-99.08089122','46','814526','TIENDA MODELORAMA'],['19.30895864','-99.26003990','46','931045','VENTA DE CERVEZA MODELORAMA'],['19.25461007','-99.10026550','46','995610','VENTA DE CERVEZA MODELORAMA'],['19.38919403','-99.21101789','72','1050824','MODELORAMA SNACKS BAM BAM']];;
	
	
	for (a=1;a<$scope.doctos.length;a++){		
		addPoint($scope.doctos[a][0],$scope.doctos[a][1],$scope.doctos[a][4]);
	}
	
	
	}
}
  ]);


	
	