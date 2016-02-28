/**
 * 
 */
app.config(function($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist(['**']);
});

app.controller("RepartidorCtrl", function($scope,$http) {
	var channel;
	window.checkLoginFB = function() {
   	 FB.getLoginStatus(function(response) {
   	      statusChangeCallback(response);
   	 });
   }
   $scope.asignaciones =[];
   
   
   
   $scope.reportar = function(c){
   		$http.post("/api/c/cerrar/"+c.id)
   		.then(function(){
   			var index = $scope.asignaciones.indexOf(c);
   		    $scope.asignaciones.splice(index, 1);
   		})
   }
   $scope.generarURL = function(c) {
	   	var url =  "https://www.google.com/maps/embed/v1/place?q="+
	   	c.lat+","+c.lon+"&zoom=17&key=AIzaSyBwqXQqaWVbOisC_o_VdCeYgXAQNAaKV9k"
	   	console.log(url);
	   	return url;
   }
   
   $scope.qr = function (c) {
	   window.open("/localizadorQR.html?hash="+c.id);
   }
   
   $scope.nombre = "Modelonow";
   $scope.userid = "";
   $scope.logueado = function() {
	   if($scope.userid =="") {
		   return false;
	   }
	   return true;
   }
   
   window.statusChangeCallback = function(response){
   	$scope.$apply(function(){
   		$scope.checkLoginFB(response);
   	});
   }
   $scope.checkLoginFB = function(response) {
  	 if (response.status === 'connected') {
  	      // Logged into your app and Facebook.
  	     
  		 $scope.userid = response.authResponse.userID;
  		 //$scope.accesstoken=response.authResponse.accessToken;
  		 $scope.userType= "fb";
  		 FB.api('/me', function(response) {  	
  			$scope.$apply(function(m){
  				$scope.nombre = response.name;
  			});
  		 });    		 
  		 
  		 $http.post("/api/r/register/"+$scope.userid)
  		 .then(function(r){
  			 $scope.token = r.data.respuesta;  	
  			 createChannel();
  		 });
  	 }
  	 createChannel = function() {
  		channel = new goog.appengine.Channel($scope.token);
		    socket = channel.open();
		    socket.onopen = function(o){
		    	console.log(o);
		    };
		    socket.onmessage = function(m){
		    	$scope.$apply(function(){
		    		var o = JSON.parse(m.data);
		    		$scope.asignaciones.push(o);
		    	});
		    };
		    socket.onerror = function(e){
		    	console.log(e);
		    };
		    socket.onclose = function(c){
		    	console.log(c);
		    };		    
  	 }
  	 
  }
});