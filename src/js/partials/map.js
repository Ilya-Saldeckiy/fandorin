ymaps.ready(init);
function init(){
    var myMap = new ymaps.Map("map", {
        center: [51.83477007217487,41.448204499999925],
        zoom: 15
    });
    var myPlacemark = new ymaps.Placemark([51.83477007217487,41.448204499999925], {}, {
        iconLayout: 'default#image',
    });

    myMap.geoObjects.add(myPlacemark);

}