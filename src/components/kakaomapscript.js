/*global kakao */
import BusPosition from '../utils/BusPosition';

export default function KakaoMapScript() {

    async function displayMarker(locPosition, message) {
        const imageSrc = 'https://cdn-icons.flaticon.com/png/512/5860/premium/5860579.png?token=exp=1657787052~hmac=c2b8562e2954a592527852b4040807bd';
        let imageSize = new kakao.maps.Size(35, 35);
        let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
    
        // 마커를 생성합니다
        let marker = new kakao.maps.Marker({
            map: map, 
            position: locPosition, 
            image : markerImage, 
        });
    
        let iwContent = message, // 인포윈도우에 표시할 내용
            iwRemoveable = true;
    
        // 인포윈도우를 생성합니다
        let infowindow = new kakao.maps.InfoWindow({
            content : iwContent,
            removable : iwRemoveable
        });
    
        // 인포윈도우를 마커위에 표시합니다
        infowindow.open(map, marker);
    
        // 지도 중심좌표를 접속위치로 변경합니다
        map.setCenter(locPosition);

        const markerdata = await BusPosition();
        markerdata.forEach(el => {
            new kakao.maps.Marker({
                //마커가 표시 될 지도
                map: map,
                //마커가 표시 될 위치
                position: new kakao.maps.LatLng(el.posY, el.posX),
                //마커에 hover시 나타날 title
                title: el.name,
              });
              
              const infoContent =`
                <div class="iwBox">
                        <h4 class="nameBox">정거장 이름:${el.name}</h4>
                </div>
              `;
        
        const infowindow = new kakao.maps.InfoWindow({
            content: infoContent, // 인포윈도우에 표시할 내용
        });

        kakao.maps.event.addListener(
            marker,
            "mouseover", //마우스를 올려둘 때 이벤트
            makeOverListener(map, marker, infowindow),
          );
        kakao.maps.event.addListener(
            marker,
            "mouseout", //마우스가 떠날 때 이벤트
            makeOutListener(infowindow)
        );
    });
        function makeOverListener(map, marker, infowindow) {
            return function () {
            infowindow.open(map, marker);
        };
        }
        //인포윈도우를 닫는 클로저를 만드는 함수
        function makeOutListener(infowindow) {
            return function () {
            infowindow.close();
        };
  }
    }
    if (navigator.geolocation) {
        // GeoLocation을 이용해서 접속 위치를 얻어옵니다.
        navigator.geolocation.getCurrentPosition(function(position){
            
            let lat = position.coords.latitude, // 위도
                lon = position.coords.longitude; // 경도
                
            let locPostion = new kakao.maps.LatLng(lat, lon), //마커가 표시될 위치를 geolocation 좌표로 생성합니다.
                message = '<div id="my-position" style="padding:5px;">현재 나의 위치</div>'; // kakao map window 에 표시될 내용

            // 마커와 인포윈도우를 표시하는 함수
            displayMarker(locPostion,message);
        });
    }
    
    // 선택
    const container = document.getElementById('myMap');
    
    // 옵션
    const options = {
        // center : 중심으로 설정할 위치
        center: new kakao.maps.LatLng(35.150369020443875, 128.87847858651804),
        // 확대 수준 default 3
        level: 2
    };
    
    // map 생성 및 지정
    const map = new kakao.maps.Map(container, options);
}