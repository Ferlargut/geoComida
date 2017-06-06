function Restaurante(nombre,direccion,coordenadas) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.coordenadas = coordenadas; 
}

var fondaFina = new Restaurante ("Fonda Fina","Medellín 79, Roma Nte., 06700 Ciudad de México, CDMX",{
    latitud : 19.4180883,
    longitud : -99.16633439999998,
});

var zucchero = new Restaurante("ZUCCHERO","Valladolid 100, Cuauhtémoc, Roma Nte., 06700 Ciudad de México, CDMX",{
    latitud : 19.4177664,
    longitud : -99.1667803,
});

var elFaraon = new Restaurante ("El Faraón","Calle Oaxaca 92-93, Cuauhtémoc, Roma Norte, Roma Nte., 06700 Ciudad de México, CDMX",{
    lat : 19.4177664,
    lng : -99.1667803,    
});
//Geolocalizacion
        function initMap() {
            var uluru = elFaraon.coordenadas;
            var map = new google.maps.Map(document.getElementById('mapa'), {
            zoom: 4,
            center: uluru
            });
            var marker = new google.maps.Marker({
            position: uluru,
            map: map
            });
        }

