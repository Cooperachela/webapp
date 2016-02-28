console.log("inicio maps");
		var marker;
		var map;
		var latLocalStorage;
		var lngLocalStorage;
		var contador=0;
		var markersLocales = [];
		var image;

		function initMap() {
			 map = new google.maps.Map(document.getElementById('map'), {
				zoom : 11,
				mapTypeControl: false,
				center : {
					lat : 59.325,
					lng : 18.070
				}
			});			     	  			 			 
			 
			 var geocoder = new google.maps.Geocoder;
			 var infowindow = new google.maps.InfoWindow;
			 
			// Create the search box and link it to the UI element.
			  var input = document.getElementById('pac-input');
			  var searchBox = new google.maps.places.SearchBox(input);
			  map.controls[google.maps.ControlPosition.LEFT].push(input);

			  // Bias the SearchBox results towards current map's viewport.
			  map.addListener('bounds_changed', function() {
			    searchBox.setBounds(map.getBounds());
			  });

			  
			 // Try HTML5 geolocation.
			  if (navigator.geolocation) {
			    navigator.geolocation.getCurrentPosition(function(position) {
			    	 var pos ;
			    	if(!lngLocalStorage && contador==0){
			    		pos = {
						        lat: position.coords.latitude,
						        lng: position.coords.longitude
						      };
			    		contador++;
			    	}else{
			    		pos = {
						        lat: latLocalStorage,
						        lng: lngLocalStorage
						      };
			    	}
			     

			      //infoWindow.setPosition(pos);
			      //infoWindow.setContent('Location found.');
			      marker.setMap(null);
			      marker = new google.maps.Marker({
					    position: {lat:  pos.lat, lng: pos.lng},
					    map: map,
					    draggable : true,
					    icon: image,
					    size: new google.maps.Size(10, 12)
					  });
			      console.log('crear marker');
			      geocodeLatLng();
			      marker.addListener('dragend', geocodeLatLng);
			      //console.log((pos);
			      map.setCenter(pos);
			    }, function() {
			      handleLocationError(true, infoWindow, map.getCenter());
			    });
			  } else {
			    // Browser doesn't support Geolocation
			    handleLocationError(false, infoWindow, map.getCenter());
			  }
			

			function handleLocationError(browserHasGeolocation, infoWindow, pos) {
			  infoWindow.setPosition(pos);
			  infoWindow.setContent(browserHasGeolocation ?
			                        'Error: The Geolocation service failed.' :
			                        'Error: Your browser doesn\'t support geolocation.');
			}
			  
			
			image = {
					  url: 'img/localizador/location_red.png',
					  size: new google.maps.Size(50, 70),
					  origin: new google.maps.Point(0, 0),
					  anchor: new google.maps.Point(17, 34),
					  scaledSize: new google.maps.Size(50, 70)
					};

			 marker = new google.maps.Marker({
				    position: {lat:  59.327, lng: 18.067},
				    map: map,
				    draggable : true,
				    icon: image,
				    size: new google.maps.Size(10, 12)
				  });
				
			
			marker.addListener('dragend', geocodeLatLng);
			

			angular.element(document.getElementById('cuerpo')).scope().localiza();
		}
		
		function remove(){
			markersLocales.forEach(function(marker) {
				//console.log(markersCristaleras[0].setMap(null));
				markersLocales[0].map;
				console.log('remove:');
				console.log(marker);
				//marker.setMap(null);
			});
		}
		
		

		function geocodeLatLng() {
		  var geocoder = new google.maps.Geocoder;
		  
		  var latlng = {lat: parseFloat(marker.position.lat()), lng: parseFloat(marker.position.lng())};
		  geocoder.geocode({'location': latlng}, function(results, status) {
		    if (status === google.maps.GeocoderStatus.OK) {
		      if (results[1]) {
		        //console.log((results[1].formatted_address);
		        document.getElementById("direccion").innerHTML = results[1].formatted_address;
		      } else {
		        window.alert('No se encontraron resultados');
		      }
		    } else {
		      window.alert('Geocoder failed due to: ' + status);
		    }
		  });
		}

		function toggleBounce(geocoder) {
			if (marker.getAnimation() !== null) {
				marker.setAnimation(null);
			} else {
				marker.setAnimation(google.maps.Animation.BOUNCE);
			}			
		}
		
		/*
		 Al inicio del boy se icnluye el div del map
		 <div id="map" style="width: 100%; height: 300px;"></div>
		 
		 Dentro de el html se debe incluir al final del body el archivo de script de maps:		 
			<script async defer
			src="https://maps.googleapis.com/maps/api/js?AIzaSyCdVavotXxHRLB3FIoogH5vQsJ3lC2legM&callback=initMap">		
			</script>
		*/
		
		function addPoint(lat,lng,titulo){	
			// Create a marker for each place.			
			var myLatlng = new google.maps.LatLng(lat,lng);			
			var contentString = '<div id="bodyContent">'
				+ '<div class="center">'
				+ '<b class="">'+titulo+'</b>'
				+ '</div>'
				+ '<div class="center">'
				+ 'Centro Modelo'
				 + '</div>' + '</div>' + '</div>';

			 var infowindow = new google.maps.InfoWindow({
			 content : contentString
		});
			 
			var marker = new google.maps.Marker({
			    position: myLatlng,
			    title:titulo			    
			}).addListener('click', function() {
				infowindow.open(map, this);
			});
			
			console.log('se crea:'+myLatlng);
			 marker = new google.maps.Marker({
				    position: myLatlng,
				    map: map,
				    draggable : false,
				    icon: image,
				    size: new google.maps.Size(10, 12)
				  }).addListener('click', function() {
						infowindow.open(map, this);
					});
			 
			 
		}