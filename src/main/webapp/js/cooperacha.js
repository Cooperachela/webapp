app.controller("CooperachaCtrl", function($scope) {
	var dialogNuevo = document.querySelector('dialog.new');
	var dialogShare = document.querySelector('dialog.share');
	
	$scope.cooperachas = [];
	$scope.abrirNuevo = function(){ 
		dialogNuevo.showModal();
    	
    };
    $scope.cerrarNuevo = function() {
    	dialogNuevo.close();
    };
    $scope.cerrarShare = function() {
    	dialogShare.close();
    };
   
    $scope.crear = function(){
    	//TODO: Conectar al servicio
    	dialogNuevo.close();
    	$scope.cooperachas.push({
    		id:$scope.nuevoTxt,    		
    		total:0.0,
    		miembros:[],
    		productos:[],
    		url:"http://cooperachela.appspot.com/api/c/"+$scope.nuevoTxt
    	});
    };
    $scope.compartir = function(c) {
    	$scope.link = c.url;
    	dialogShare.showModal();    	
    };
});