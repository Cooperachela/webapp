var app = angular.module('MainApp', []);

app.config(['$httpProvider', function($httpProvider) 
         {	
           if (!$httpProvider.defaults.headers.get) 
         	{
               $httpProvider.defaults.headers.get = {};    
           }        
           $httpProvider.defaults.headers.get['If-Modified-Since'] = 'Mon, 26 Jul 1997 05:00:00 GMT';
           $httpProvider.defaults.headers.get['Cache-Control'] = 'no-cache';
           $httpProvider.defaults.headers.get['Pragma'] = 'no-cache';	
         }]);

//servicios REST
app.service('ServiciosReporte',['$http','$q',function($http,$q)
{  	
this.doRenovacion = 
		function( json )
		{
			var deferred= $q.defer();  
			$http.defaults.headers.common['Accept']='application/json';
			$http.defaults.headers.common['Accept-Language']='ES';
			$http.defaults.headers.common['Content-Type']='application/json;charset=UTF-8';				
			$http.post('./api/reporteAsistencia/asistencia', json)
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

app.controller('PhoneListCtrl', ['$scope','ServiciosReporte' ,'$filter',
                               function ($scope,ServiciosReporte,$filter) 
                               {                                
	
                               }]);