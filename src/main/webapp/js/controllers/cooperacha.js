window.fbAsyncInit = function() {
  FB.init({
    appId      : '832252386885169',
    cookie     : true,  // enable cookies to allow the server to access 
                        // the session
    xfbml      : true,  // parse social plugins on this page
    version    : 'v2.5' // use graph api version 2.5
  });
}


app.controller("CooperachaCtrl", function($scope,$http) {
	$scope.currentId =document.getElementsByName("cooperachela")[0].content;
	
	var dialogNuevo = document.querySelector('dialog.new');
	var dialogShare = document.querySelector('dialog.share');
	var dialogLogin = document.querySelector('dialog.login');
	
	var dialogCooperar = document.querySelector('dialog.cooperar');
	var dialogPedido = document.querySelector('dialog.pedido');
	
	
	$scope.nombre="";
	$scope.cooperachas = [];
	
	$scope.vacio = function(){
		return $scope.cooperachas.length==0;
	};
	
	$scope.abrirNuevo = function(){ 
		dialogNuevo.showModal();
    	
    };
    $scope.abrirPedido = function(){ 
    	dialogPedido.showModal();
    	
    };
    $scope.cerrarNuevo = function() {
    	dialogNuevo.close();
    };
    $scope.cerrarShare = function() {
    	dialogShare.close();
    };
    $scope.cerrarCooperar = function() {
    	dialogCooperar.close();
    }
   
    $scope.recoger = function() {
    	
    	window.location = "/localizador.html?hash="+$scope.currentId;
    }
    $scope.pedir = function() {
    	//TODO: Funcionalidad para mandar a producción
    }
    
    $scope.crear = function(){
    	$http.post("/api/c",{
    		id:$scope.nuevoTxt
    	})
		.then(function(r){			
			if(r.data.codigo==200){
				$scope.currentId = $scope.nuevoTxt;
				dialogNuevo.close();
		    	$scope.cooperachas.push({
		    		id:$scope.nuevoTxt,    		
		    		total:0.0,
		    		meta:0.0,
		    		miembros:[],
		    		productos:[],
		    		url:"http://cooperachela.appspot.com/api/c/"+$scope.nuevoTxt
		    	});
			}else {
				$scope.errorNuevo = true; 
			}
		});    	
    };
    $scope.limpiaError = function() {
    	$scope.errorNuevo = false;
    }
    $scope.compartir = function(c) {
    	$scope.link = c.url;
    	FB.XFBML.parse();
    	dialogShare.showModal();    	
    };
    
    $scope.cargar = function(id){
    	$http.get("/api/c/json/"+id)
    	.then(function(d){
    		console.log(d);
    		$scope.cooperachas.push(d.data);
    	})
    }
    
    $scope.cooperar =function() {
    	if($scope.userid !=null){
    		dialogCooperar.showModal();
    	}else {
    		dialogLogin.showModal();
    	}
    }
    
    if($scope.currentId!=""){
    	$scope.cargar($scope.currentId);
    }
    $scope.checkLoginFB = function(response) {
    	 if (response.status === 'connected') {
    	      // Logged into your app and Facebook.
    	     
    		 $scope.userid = response.authResponse.userID;
    		 //$scope.accesstoken=response.authResponse.accessToken;
    		 $scope.userType= "fb";
    		 FB.api('/me', function(response) {
    			  dialogLogin.close();
    		      $scope.nombre = response.name;
    		      dialogCooperar.showModal();
    		 });    		 
    	 }
    }
    $scope.pagar = function() {
        document.forms["formPaypal"].submit(); 
    }
    
    window.checkLoginFB = function() {
    	 FB.getLoginStatus(function(response) {
    	      statusChangeCallback(response);
    	 });
    }
    window.statusChangeCallback = function(response){
    	$scope.$apply(function(){
    		$scope.checkLoginFB(response);
    	});
    }
    
});