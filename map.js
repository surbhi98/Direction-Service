function hello(){
	window.alert('hello');
	
}
      function initMap() {
	  
        var directionsService = new google.maps.DirectionsService;
        //var directionsDisplay = new google.maps.DirectionsRenderer;
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 7,
         // center: {lat: 41.85, lng: -87.65}
		  center: {lat: 28.7041, lng: 77.1025 }
        });
     
        var infowindow = new google.maps.InfoWindow;

        var onChangeHandler1 = function() {
          calculateAndDisplayRoute1(directionsService, map);
	};
		        var onChangeHandler2 = function() {
          calculateAndDisplayRoute2(directionsService, map);
	};
	        var onChangeHandler3 = function() {
          calculateAndDisplayRoute3(directionsService, map);
	};
	
	
	
	
        //document.getElementById('start').addEventListener('change', onChangeHandler);
       // document.getElementById('end').addEventListener('change', onChangeHandler);
		document.getElementById('submit1').addEventListener('click', onChangeHandler1);
		document.getElementById('submit2').addEventListener('click', onChangeHandler2);
		document.getElementById('submit3').addEventListener('click', onChangeHandler3);
		
      }

	  
	
	  
	  
      function calculateAndDisplayRoute1(directionsService, map, infowindow) {
	  var waypts = ['Nevada'];
        directionsService.route({
          origin: document.getElementById('start').value,
          destination: document.getElementById('end').value,
          travelMode: 'DRIVING',
		//  var input = "40.714224,-73.961452";
       // var latlngStr = input.split(',', 2);
        //var latlng = {lat: parseFloat(latlngStr[0]), lng: parseFloat(latlngStr[1])};
		  
		  
		  //waypoints: waypts,
		  // provideRouteAlternatives: true
        }, function(response, status) {
          if (status === 'OK') { 
		  
			//console.log(response.routes[1].legs[0].steps[0])
			          //  window.alert(response);
						//window.alert(response.routes.length);
		 
	
				new google.maps.DirectionsRenderer({
                    map: map,
                    directions: response
                   // routeIndex: i
                });
				
			} else {
            window.alert('Directions request failed due to ' + status);
          }
        });
		}
		
		
		
		function calculateAndDisplayRoute2(directionsService, map, infowindow) {
	  var waypts = ['Nevada'];
        directionsService.route({
          origin: document.getElementById('start').value,
          destination: document.getElementById('end').value,
          travelMode: 'DRIVING',
		//  var input = "40.714224,-73.961452";
       // var latlngStr = input.split(',', 2);
        //var latlng = {lat: parseFloat(latlngStr[0]), lng: parseFloat(latlngStr[1])};
		  
		  
		  //waypoints: waypts,
		   provideRouteAlternatives: true
        }, function(response, status) {
          if (status === 'OK') { 
		  
			//console.log(response.routes[1].legs[0].steps[0])
			          //  window.alert(response);
						//window.alert(response.routes.length);
		 
		 	
		 for (var i = 0, len = response.routes.length; i < len; i++) {
                var flag=0;
				var jlen = response.routes[i].legs[0].steps.length;
			
				
				var j=0;
				for(var j=0;j<jlen; j++)
				{
				//console.log(response.routes[i].legs[0].steps[j].end_location.lat()+','+response.routes[i].legs[0].steps[0].end_location.lng());
			 
				var inp = response.routes[i].legs[0].steps[j].end_location.lat()+','+response.routes[i].legs[0].steps[j].end_location.lng();
				console.log(inp);
				if(inp === "41.4989601,-95.57811600000002" ) 
				{	flag=1;
				  console.log(".......break......"); break;
				}
				
		}
				
			//Uncomment it.............//	if(flag===0)
				//{
				new google.maps.DirectionsRenderer({
                    map: map,
                    directions: response,
                    routeIndex: i
                });
				
				//}
            }
		

			
          } else {
            window.alert('Directions request failed due to ' + status);
          }
        });
		}
		
		
		function calculateAndDisplayRoute3(directionsService, map, infowindow) {
	  var waypts = ['Nevada'];
        directionsService.route({
          origin: document.getElementById('start').value,
          destination: document.getElementById('end').value,
          travelMode: 'DRIVING',
		//  var input = "40.714224,-73.961452";
       // var latlngStr = input.split(',', 2);
        //var latlng = {lat: parseFloat(latlngStr[0]), lng: parseFloat(latlngStr[1])};
		  
		  
		  //waypoints: waypts,
		   provideRouteAlternatives: true
        }, function(response, status) {
          if (status === 'OK') { 
		  
			//console.log(response.routes[1].legs[0].steps[0])
			          //  window.alert(response);
						//window.alert(response.routes.length);
		 
		 	
		 for (var i = 0, len = response.routes.length; i < len; i++) {
                var flag=0;
				var jlen = response.routes[i].legs[0].steps.length;
			
				
				var j=0;
				for(var j=0;j<jlen; j++)
				{
				//console.log(response.routes[i].legs[0].steps[j].end_location.lat()+','+response.routes[i].legs[0].steps[0].end_location.lng());
			 
				var inp = response.routes[i].legs[0].steps[j].end_location.lat()+','+response.routes[i].legs[0].steps[j].end_location.lng();
				console.log(inp);
				var lis=['28.5821148,77.25939560000006','27.5955812,76.08184089999997', '27.6867333,85.29816000000005'];
				for (var j=0;j<lis.length; j++)
				{	if(inp === lis[j] ) 
				{	flag=1;
				  console.log(".......break......"); break;
				}
				}
				if(flag===1) break;
				
		}
				
				if(flag===0)
				{
				new google.maps.DirectionsRenderer({
                    map: map,
                    directions: response,
                    routeIndex: i
                });
				
				}
            }
		

			
          } else {
            window.alert('Directions request failed due to ' + status);
          }
        });
		}
		
		
	
	  
   
   