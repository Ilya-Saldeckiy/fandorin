ymaps.ready(init);
function init(){
    var myMap = new ymaps.Map("map", {
        center: [51.83584677605506,41.44874035223887],
        zoom: 18,
        controls: ['zoomControl'],
    });
    var myPlacemark = new ymaps.Placemark([51.83584677605506,41.44874035223887], {}, {
        iconLayout: 'default#image',
    });

    myMap.geoObjects.add(myPlacemark);

}