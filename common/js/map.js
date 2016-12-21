var map;
var myLatLng = new google.maps.LatLng(43.146611, 141.350588);
var MY_MAPTYPE_ID = 'Pandy_style';

function initialize() {
 
	var featureOpts = [
		{
			"featureType": "all",
			"stylers": [
				{ "hue": "#fffff" },
				{ "gannma": 4 },
				{ "lightness": 50 },		
				{ "saturation": -100 }
			]
			},{
			"featureType": "road",
			"stylers": [
				{ "visibility": "on" },
				{ "color": "#ffffff" }
			]
		}
			 
	]
	 
	var mapOptions = {
		zoom: 16,
		center: myLatLng,
		scrollwheel: false,
		mapTypeControlOptions: {
			mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
		},
		mapTypeId: MY_MAPTYPE_ID
	};
	
	 map = new google.maps.Map(document.getElementById('map'),
			mapOptions);
		 
	var marker = new google.maps.Marker({
			position: myLatLng,
			map: map,
			icon: "img/top/icn_map.png",
	});
	
	var styledMapOptions = {
		name: 'ColorMap'
	};
	 
	var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);
	 
		map.mapTypes.set(MY_MAPTYPE_ID, customMapType);

}
 
google.maps.event.addDomListener(window, 'load', initialize);