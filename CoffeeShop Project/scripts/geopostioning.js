function createDrivingDirectionMap(){
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(OnSuccess, OnError,{
            enableHighAccuracy: true,
            timeout: 500,
            maximumAge: 1000,
        });
        }else{
            document.getElementById("map").innerHTML = "No Support for Geolocation, we can't find your location";
        }
    };
function OnSuccess(position) {
    showMap(position.coords.latitude, position.coords.longitude); 
};   
function OnError(error) {
    var mapDiv = document.getElementById("map");
    switch(error.code) {
        case error.PERMISSION_DENIED:
            mapDiv.innerHTML = "User denied the request for Geolocation.";
            break;
        case error.POSITION_UNAVAILABLE:
            mapDiv.innerHTML = "Location information is unavailable.";
            break;
        case error.TIMEOUT:
            mapDiv.innerHTML = "The request to get user location timed out.";
            break;
        case error.UNKNOWN_ERROR:
            mapDiv.innerHTML = "An unknown error occurred.";
            break;
    }
};
function showMap(latitude, longitude) {
    var directionsService = new google.maps.DirectionsService();
    var directionsRenderer = new google.maps.DirectionsRenderer();

    var route = {
    origin: new google.maps.LatLng(latitude, longitude),
    destination: "DLFCyberCity, Hyderabad", // Example destination (Stockholm)
    travelMode: google.maps.DirectionsTravelMode.DRIVING,
    };

    var mapOptions = {
        zoom: 10,
        center: new google.maps.LatLng(17.448294, 78.391487),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
directionsRenderer.setMap(map);
directionsRenderer.setPanel(document.getElementById("drivi  ng-directions"));
directionsService.route(route, function(result, status) {
    if (status === google.maps.DirectionsStatus.OK) {
        directionsRenderer.setDirections(result);
    } else {
        document.getElementById("map").innerHTML = "Unable to retrieve driving directions.";
    }
});
};
