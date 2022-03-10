$(document).ready(function(){
    $('.header__burger').click(function(event){
        $('.header__burger,.header__menu').toggleClass('active');
        $('boby').toggleClass('lock');
    });
});

$(document).ready(function() {
	if($('#map').length) {
		ymaps.ready(function () {
		var mapx = $('#map').data('mapx');
		var mapy = $('#map').data('mapy');
		var myMap = new ymaps.Map('map', {
				center: [mapx, mapy],
				zoom: 15,
				scrollZoom: false,
				controls: ['zoomControl']
			}, {
				searchControlProvider: 'yandex#search'
			}),

			myPlacemark = new ymaps.Placemark([mapx, mapy], {
				balloonOffset: [55, 10],
				hideIconOnBalloonOpen: false,
				iconLayout: 'default#image',
				iconImageHref: '/local/templates/probeg/img/map-pin.svg',
				iconImageSize: [28, 45],
				iconImageOffset: [-14, -45],
				balloonclose: false,
			});
			myMap.behaviors.disable('scrollZoom');
			myMap.geoObjects
			.add(myPlacemark)

		});
	}
});