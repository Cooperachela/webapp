/**
 * 
 */

app.controller("MainController", function($scope,$http) {
	$scope.productos=[{
		id:1,
		nombre:"Bud Light",
		precio:293.0,
		url:"img/product1.png"
	},{
		id:2,
		nombre:"Corona Extra",
		precio:120.0,
		url:"img/product2.png"
	},{
		id:3,
		nombre:"Michelob Ultra",
		precio:180.0,
		url:"img/product3.png"
	}];
	$scope.global = 0;
	$scope.pedido = [];
	$scope.cooperacha = function() {
		localStorage.pedido = JSON.stringify($scope.pedido);
		window.location = "/api/c";
	};
	$scope.add = function(id,v) {
		var selectProduct;
		angular.forEach($scope.productos, function(value, key) {
			  if(value.id == id){
				  selectProduct = value;
			  }
		});
		var currentProduct = null;
		angular.forEach($scope.pedido, function(value, key) {
			  if(value.id == id){
				  currentProduct = value;
			  }
		});
		if(currentProduct != null){
			if(!(v==-1 && currentProduct.cantidad ==0)) {			
				currentProduct.cantidad+=v;
				$scope.global+=v;
				currentProduct.total = currentProduct.cantidad * selectProduct.precio;
			}
		}else {
			$scope.pedido.push({
				id:selectProduct.id,
				nombre:selectProduct.nombre,
				cantidad:1,
				total:selectProduct.precio,
				url:selectProduct.url
			});
			$scope.global+=1;
		}
	}
	
	
	
});