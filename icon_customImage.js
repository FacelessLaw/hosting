ymaps.ready(function() {
    // Создаём макет содержимого.
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        KP1pm = new ymaps.Placemark([55.63198142395086, 37.48414845767075], {
            balloonContent: '<div>Площадка переполнена. С контейнеров слезает краска. Контейнерами такого типа неудобно пользоваться и они выглядят неэстетично</div><img src="КП 1.jpeg" height="403">',
            ImageWithContent: 'КП 1.jpeg',
            iconContent: 'КП1'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'КП 1 icon.jpeg',
            // Размеры метки.
            iconImageSize: [99, 99],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-44, -44],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [55, 55],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });
    KP2pm = new ymaps.Placemark([55.630079, 37.484944], {
        balloonContent: '<div>Площадка переполнена. С контейнеров слезает краска, от одного из них оторвана дверца. Контейнерами такого типа неудобно пользоваться и они выглядят неэстетично</div><img src="КП 2.jpeg" height="403">',
        ImageWithContent: 'КП 2.jpeg',
        iconContent: 'КП 2'
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#imageWithContent',
        // Своё изображение иконки метки.
        iconImageHref: 'КП 2 icon.jpeg',
        // Размеры метки.
        iconImageSize: [99, 99],
        // Смещение левого верхнего угла иконки относительно
        iconImageOffset: [-44, -44],
        // Смещение слоя с содержимым относительно слоя с картинкой.
        iconContentOffset: [55, 55],
        // Макет содержимого.
        iconContentLayout: MyIconContentLayout
    });
    KP4pm = new ymaps.Placemark([55.632458, 37.485617], {
        balloonContent: '<div>Площадку закрыли и не демонтируют</div><img src="КП 4.jpg" width="450" height="200">',
        ImageWithContent: 'КП 4.jpg',
        iconContent: 'КП 4'
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#imageWithContent',
        // Своё изображение иконки метки.
        iconImageHref: 'КП 4 icon.jpg',
        // Размеры метки.
        iconImageSize: [99, 99],
        // Смещение левого верхнего угла иконки относительно
        iconImageOffset: [-44, -44],
        // Смещение слоя с содержимым относительно слоя с картинкой.
        iconContentOffset: [55, 55],
        // Макет содержимого.
        iconContentLayout: MyIconContentLayout
    });
    KP3pm = new ymaps.Placemark([55.632406, 37.485799], {
        balloonContent: '<div>Мусорные контейнеры всегда переполнены, вокруг свален мусор, мебель</div><img src="КП 3.jpeg" height="403">',
        ImageWithContent: 'КП 3.jpeg',
        iconContent: 'КП 3'
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#imageWithContent',
        // Своё изображение иконки метки.
        iconImageHref: 'КП 3 icon.jpeg',
        // Размеры метки.
        iconImageSize: [99, 99],
        // Смещение левого верхнего угла иконки относительно
        iconImageOffset: [-44, -44],
        // Смещение слоя с содержимым относительно слоя с картинкой.
        iconContentOffset: [55, 55],
        // Макет содержимого.
        iconContentLayout: MyIconContentLayout
    });
    KP8pm = new ymaps.Placemark([55.63006093078069, 37.48610784424967], {
        balloonContent: '<div>Обычно площадка завалена мусором, баки в стороне стоят, вонь ужасная</div><img src="КП 8.jpeg" height="403">',
        ImageWithContent: 'КП 8.jpeg',
        iconContent: 'КП 8'
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#imageWithContent',
        // Своё изображение иконки метки.
        iconImageHref: 'КП 8 icon.jpeg',
        // Размеры метки.
        iconImageSize: [99, 99],
        // Смещение левого верхнего угла иконки относительно
        iconImageOffset: [-44, -44],
        // Смещение слоя с содержимым относительно слоя с картинкой.
        iconContentOffset: [55, 55],
        // Макет содержимого.
        iconContentLayout: MyIconContentLayout
    });
    KP11pm = new ymaps.Placemark([55.6436, 37.473853], {
        balloonContent: '<div>Контейнерной площадкой не удобно пользоваться. Объём площадки недостаточен - вокруг неё регулярно образуется свалка</div><img src="КП 11.jpeg" height="403">',
        ImageWithContent: 'КП 11.jpeg',
        iconContent: 'КП 11'
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#imageWithContent',
        // Своё изображение иконки метки.
        iconImageHref: 'КП 11 icon.jpeg',
        // Размеры метки.
        iconImageSize: [99, 99],
        // Смещение левого верхнего угла иконки относительно
        iconImageOffset: [-44, -44],
        // Смещение слоя с содержимым относительно слоя с картинкой.
        iconContentOffset: [55, 55],
        // Макет содержимого.
        iconContentLayout: MyIconContentLayout
    });
    KP10pm = new ymaps.Placemark([55.644837, 37.47613], {
        balloonContent: '<div>Контейнерная площадка обычно закрыта, неудобно пользоваться. За контейнерами регулярно сваливают мусор, 11.04.2023г. он горел, пожарные тушили</div><img src="КП 10.jpeg" height="403">',
        ImageWithContent: 'КП 10.jpeg',
        iconContent: 'КП 10'
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#imageWithContent',
        // Своё изображение иконки метки.
        iconImageHref: 'КП 10 icon.jpeg',
        // Размеры метки.
        iconImageSize: [99, 99],
        // Смещение левого верхнего угла иконки относительно
        iconImageOffset: [-44, -44],
        // Смещение слоя с содержимым относительно слоя с картинкой.
        iconContentOffset: [55, 55],
        // Макет содержимого.
        iconContentLayout: MyIconContentLayout
    });
    KP5pm = new ymaps.Placemark([55.643395, 37.476457], {
        balloonContent: '<div>Контейнеры часто переполнены и закрыты, открывать их негигиенично, отверстие для мусора маленькое</div><img src="КП 5.jpeg" height="403">',
        ImageWithContent: 'КП 5.jpeg',
        iconContent: 'КП 5'
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#imageWithContent',
        // Своё изображение иконки метки.
        iconImageHref: 'КП 5 icon.jpeg',
        // Размеры метки.
        iconImageSize: [99, 99],
        // Смещение левого верхнего угла иконки относительно
        iconImageOffset: [-44, -44],
        // Смещение слоя с содержимым относительно слоя с картинкой.
        iconContentOffset: [55, 55],
        // Макет содержимого.
        iconContentLayout: MyIconContentLayout
    });
    KP7pm = new ymaps.Placemark([55.62953214286366, 37.4767416296381], {
        balloonContent: '<div>Контейнеры ржавые, сломанные, неудобные - требуют замены</div><img src="КП 7.jpeg" height="403">',
        ImageWithContent: 'КП 7.jpeg',
        iconContent: 'КП 7'
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#imageWithContent',
        // Своё изображение иконки метки.
        iconImageHref: 'КП 7 icon.jpeg',
        // Размеры метки.
        iconImageSize: [99, 99],
        // Смещение левого верхнего угла иконки относительно
        iconImageOffset: [-44, -44],
        // Смещение слоя с содержимым относительно слоя с картинкой.
        iconContentOffset: [55, 55],
        // Макет содержимого.
        iconContentLayout: MyIconContentLayout
    });
    KP12pm = new ymaps.Placemark([55.644983, 37.477967], {
        balloonContent: '<div>Контейнерной площадкой неудобно пользоваться. Контейнеры часто стоят за пределами площадки</div><img src="КП 12.jpeg" height="403">',
        ImageWithContent: 'КП 12.jpeg',
        iconContent: 'КП 12'
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#imageWithContent',
        // Своё изображение иконки метки.
        iconImageHref: 'КП 12 icon.jpeg',
        // Размеры метки.
        iconImageSize: [99, 99],
        // Смещение левого верхнего угла иконки относительно
        iconImageOffset: [-44, -44],
        // Смещение слоя с содержимым относительно слоя с картинкой.
        iconContentOffset: [55, 55],
        // Макет содержимого.
        iconContentLayout: MyIconContentLayout
    });
    KП13pm = new ymaps.Placemark([55.64342, 37.47851], {
        balloonContent: '<div>Контейнерная площадка неудобна в использовании: маленькие отверстия, необходимость открывать крышки - всё это неудобно. Контейнеры регулярно не убирают внутрь площадки</div><img src="KП 13.jpeg" height="403">',
        ImageWithContent: 'KП 13.jpeg',
        iconContent: 'KП 13'
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#imageWithContent',
        // Своё изображение иконки метки.
        iconImageHref: 'KП 13 icon.jpeg',
        // Размеры метки.
        iconImageSize: [99, 99],
        // Смещение левого верхнего угла иконки относительно
        iconImageOffset: [-44, -44],
        // Смещение слоя с содержимым относительно слоя с картинкой.
        iconContentOffset: [55, 55],
        // Макет содержимого.
        iconContentLayout: MyIconContentLayout
    });
    KP9pm = new ymaps.Placemark([55.62883, 37.48414], {
        balloonContent: '<div>Контейнерной площадкой данного типа неудобно пользоваться</div><img src="КП 9.jpeg" height="403">',
        ImageWithContent: 'КП 9.jpeg',
        iconContent: 'КП 9'
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#imageWithContent',
        // Своё изображение иконки метки.
        iconImageHref: 'КП 9 icon.jpeg',
        // Размеры метки.
        iconImageSize: [99, 99],
        // Смещение левого верхнего угла иконки относительно
        iconImageOffset: [-44, -44],
        // Смещение слоя с содержимым относительно слоя с картинкой.
        iconContentOffset: [55, 55],
        // Макет содержимого.
        iconContentLayout: MyIconContentLayout
    });
    var myMap = new ymaps.Map('map', {
            center: [55.62883, 37.48414],
            zoom: 15
        }, {
            searchControlProvider: 'yandex#search'
        }).geoObjects
        .add(KP1pm)
        .add(KP2pm)
        .add(KP3pm)
        .add(KP4pm)
        .add(KP8pm)
        .add(KP5pm)
        .add(KP7pm)
        .add(KP8pm)
        .add(KP9pm)
        .add(KP10pm)
        .add(KP11pm)
        .add(KP12pm)
        .add(KP13pm);
});