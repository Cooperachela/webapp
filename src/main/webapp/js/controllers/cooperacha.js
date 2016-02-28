

app.controller("CooperachaCtrl", function($scope,$http) {
	$scope.currentId =document.getElementsByName("cooperachela")[0].content;
	
	var dialogNuevo = document.querySelector('dialog.new');
	var dialogShare = document.querySelector('dialog.share');
	
	$scope.cooperachas = [];
	
	$scope.vacio = function(){
		return $scope.cooperachas.length==0;
	};
	
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
    	$http.post("/api/c",{
    		id:$scope.nuevoTxt
    	})
		.then(function(r){			
			if(r.data.codigo==200){
				dialogNuevo.close();
		    	$scope.cooperachas.push({
		    		id:$scope.nuevoTxt,    		
		    		total:0.0,
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
    	dialogShare.showModal();    	
    };
    
    $scope.cargar = function(id){
    	$http.get("/api/c/json/"+id)
    	.then(function(d){
    		console.log(d);
    		$scope.cooperachas.push(d.data);
    	})
    }
    
    if(!$scope.vacio()){
    	$scope.cargar($scope.currentId);
    }
    
});