import React from 'react';
import React, { Component } from 'react';
import Map from '../components/GoogleMap';

render() {
    return (
      <div>
        <Map />
      </div>
    )
  };

export default Map;

  // Inits Map
    function initMap(){
       
      //New Map
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 10,
          center: {lat: 30.267, lng: -97.743},
        //Controls: // can remove "false"s before deployment
          zoomControl: false,
          mapTypeControl: false,
          scaleControl: false,
          streetViewControl: false,
          rotateControl: false,
          fullscreenControl: false,
          styles: [ //removes all points of business, minus parks, schools, bus stops....
                    {
                      featureType: 'poi.business',
                      stylers: [{visibility: 'off'}]
                    }
                  ]
                });

        //---------------------------------VV    User Geolocation   VV---------------------------------------
        infoWindow = new google.maps.InfoWindow;

        // Try HTML5 geolocation.
        if (navigator.geolocation) {
         navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('You are here!');
            infoWindow.open(map);
            // map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        };

      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
      }
    
        //---------------------------------^^    User Geolocation   ^^---------------------------------------

        //---------------------------------V    Static Geolocations   V---------------------------------------
        // POPULATE MARKER ARRAY WITH DB INFO
        // Stylize markers

        //Array of Markers
        var markers =[ 
            {
            coors:{lat: 30.201,lng: -97.879981},
            iconimage: "",
            content: '<a href="https://torchystacos.com/location/escarpment/">Escarpment</a>\n' +    // 
                     '<p>5900 W Slaughter Ln </p>\n' +
                     '<p>Austin, TX 78749</p>\n'
            },
            {
            coors:{lat: 30.4689,lng: -97.595573},
            iconimage: "",
            content: '<p>Stonehill, Pflugerville</p>',
            },
            {
            coors:{lat: 30.383457,lng: -97.770789},
            iconimage: "",
            content: '<p>SpriceWood Springs</p>',
            },
            {
            coors:{lat: 30.293316,lng: -97.741858},
            iconimage: "",
            content: '<p>Guadalupe</p>',
            },
            {
            coors:{lat: 30.236773,lng: -97.762783},
            iconimage: "",
            content: '<a href="https://torchystacos.com/location/el-paso/">South First</a>\n' +
                     '<p>2809 S. 1ST ST.</p>\n' +
                     '<p>Austin, TX 78704</p>\n'
            },
            {
            coors:{lat: 30.305428,lng: -97.702329},
            iconimage: "",
            content: '<p>Mueller</p>',
            }
        ];

        // Loops thru Marker Locations
        for (var i =0; i<markers.length; i++){
            addMarker(markers[i]);
        };

        //Add Marker
        function addMarker(props){
            var marker = new google.maps.Marker({
            position:props.coors,
            map:map,
            icon:'./images/icons8-taco-48.png',
            content: props.content,
        });

            //Sets Icon image
            if(props.iconImage){
                marker.setIcon(props.iconImage);
            };

            //Sets Contents
            if(props.content){
                var infoWindow = new google.maps.InfoWindow({
                    content: props.content
                });

                marker.addListener('click', function(){
                    infoWindow.open(map, marker);
                });
            };
        }
    };

    Need to add on
    // <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyATPSXO6bKoMy5EnL8lMZ90G902NqsOZzY&callback=initMap"
    // async defer></script>