//map.html
export default function displayMarker(locPosition, message) {
	let imageSize = new kakao.maps.Size(24, 35);
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
}