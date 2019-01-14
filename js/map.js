var map = null;

function loadMap() {
    var location = new naver.maps.LatLng(37.457972, 126.953876)
    map = new naver.maps.Map('map', {
        center: location,
        zoom: 11
    });

    var contentString = [
        '<div class="iw_inner" style="padding:10px">',
        '   <h3>서울대학교관악캠퍼스교수회관</h3>',
        '   <p>서울특별시 관악구 관악로 1<br>',
        '       지번주소: 서울특별시 관악구 신림동 산56-1<br>',
        '       <a href="http://facultyclub.snu.ac.kr" target="_blank">http://facultyclub.snu.ac.kr</a>',
        '   </p>',
        '</div>'
    ].join('');

    var marker = new naver.maps.Marker({
        map: map,
        position: location
    });

    var infowindow = new naver.maps.InfoWindow({
        content: contentString
    });

    infowindow.open(map, marker);

    naver.maps.Event.addListener(marker, 'click', function(e) {
        if (infowindow.getMap()) {
            infowindow.close();
        } else {
            infowindow.open(map, marker);
        }
    });

    map.panBy(new naver.maps.Point(0, -48));
}