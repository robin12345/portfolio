// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 7,

        scrollwheel: false,
        panControl: false,
        rotateControl: false,
        disableDoubleClickZoom: 'Disables',
        disableDefaultUI: 'Disables',
        draggable: false,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(44.94573213, 34.08164687),

        // How you would like to style the map.
        // This is where you would paste any style found on Snazzy Maps.
        styles: [
            {
                "featureType": "administrative.locality",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#3c806f"
                    }
                ]
            },
            {
                "featureType": "administrative.locality",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#91d8c9"
                    }
                ]
            },
            {
                "featureType": "landscape.natural",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#4fbaa4"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#74c8b6"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "lightness": 100
                    },
                    {
                        "visibility": "simplified"
                    },
                    {
                        "color": "#99dbce"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "lightness": 700
                    },
                    {
                        "color": "#99dbce"
                    }
                ]
            },
            {
                "featureType": "transit.station",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#65aa9a"
                    }
                ]
            }
        ]
    };

    // Get the HTML DOM element that will contain your map
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Let's also add a marker while we're at it
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(44.7573213, 34.09164687),
        map: map,
        icon: '../../images/Marker.png',
        draggable: true,
        visible: true
    });

    var boxText = document.createElement("div");
    boxText.className = 'gmap__inner';
    boxText.innerHTML = "Я нахожусь в г. Симферополь";
    var myOptions = {
        content: boxText
        ,disableAutoPan: false
        ,maxWidth: 0
        ,zIndex: 1000
        ,pixelOffset: new google.maps.Size(-150, 0)
        ,boxClass: 'gmap__infobox'
        ,closeBoxURL: ""
        ,infoBoxClearance: new google.maps.Size(1, 1)
        ,isHidden: false
        ,pane: "floatPane"
        ,enableEventPropagation: false
    };

    var ib = new InfoBox(myOptions);
    ib.open(map, marker);

}