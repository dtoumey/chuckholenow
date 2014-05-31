$(document).ready(function(){
	$('#potholereporter').click(function() {
		var myDataRef = new Firebase('https://incandescent-fire-4065.firebaseio.com/');	  
		var username = 'hoosier driver';
		var pothole_location =  {'Longitude': 39.93368,'Latitude': 89.55608}; 		 
		myDataRef.push({username: username, pothole_location:pothole_location, status: 'open'});
	});
});