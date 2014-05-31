$(document).ready(function(){
	$('#potholereporter').click(function() {
		var myDataRef = new Firebase('https://incandescent-fire-4065.firebaseio.com/');	  
		var username = 'hoosier driver';
		var pothole_location =  getMyLocation();
		var date_reported = new Date().toString();;
		console.log(date_reported);
		myDataRef.push({username: username, 
						date_reported:date_reported,
						pothole_location:pothole_location,
						status: 'open'});
	});
});


function getMyLocation(){
	var longitude = (39 + Math.random()).toFixed(5);
	var latitude = (89 + Math.random()).toFixed(5);
	var pothole_location =  {'Longitude': longitude,'Latitude': latitude}; 	
	return pothole_location;
} 


