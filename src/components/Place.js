import React, { useRef, useEffect } from 'react';
import maker from '../assets/img/marker.png';
import useScrollFadeIn from '..//hooks/useScrollFadeIn';

const options = {
    center: window.kakao ? new window.kakao.maps.LatLng(34.7423, 127.7544) : null, //지도의 중심좌표.
    level: 6
};

function Place() {
    const animatedItem = [
        useScrollFadeIn('up', 1, 0),
        useScrollFadeIn('up', 1, 0),
        useScrollFadeIn('up', 1, 0),
        useScrollFadeIn('up', 1, 0)
    ];
    const container = useRef(null); //지도를 담을 영역의 DOM 레퍼런스
    useEffect(() => {
        if (!window.kakao) return () => {};
        const map = new window.kakao.maps.Map(container.current, options); //지도 생성 및 객체 리턴
        var markerPosition = new window.kakao.maps.LatLng(34.7423, 127.7544);

        const markerImage = new window.kakao.maps.MarkerImage(maker, new window.kakao.maps.Size(44, 47), {
            offset: new window.kakao.maps.Point(22, 47)
        });

        var marker = new window.kakao.maps.Marker({
            position: markerPosition,
            image: markerImage
        });
        marker.setMap(map);
        map.setDraggable(true);
        var content =
            '<div class="customoverlay">' +
            '  <a href="https://naver.me/x2PkLD49" target="_blank">' +
            '    <span class="tag">소노캄여수</span>' +
            '  </a>' +
            '</div>';

        var position = new window.kakao.maps.LatLng(34.7423, 127.7544);

        new window.kakao.maps.CustomOverlay({
            map: map,
            position: position,
            content: content,
            yAnchor: 1
        });
        return () => {};
    }, []);

    return (
        <div className="content place">
            <h2 {...animatedItem[0]} className="title">
                오시는 길
            </h2>
            <div {...animatedItem[1]} className="address">
                <span>소노캄 여수</span>
                <span>전남 여수시 오동도로 111</span>
                <a href={'tel:061-660-5800'}>061-660-5800</a>
            </div>
            <div {...animatedItem[2]}>
                <div className="map" ref={container}></div>
            </div>
            <div {...animatedItem[3]} className="transportation">
                <div className="transBox">
                    <div className="means">여수시외버스터미널 &rarr; 소노캄 여수</div>
                    <div className="desc">
                        시내버스 333번 탑승 &rarr; '오동도 입구' 정류장에서 하차
                        <br />약 15분 소요
                    </div>
                </div>
                <div className="transBox">
                    <div className="means">여수 엑스포역 &rarr; 소노캄 여수</div>
                    <div className="desc">
                        '오동도 방면' 정류장에서 시내버스 2번 탐승 &rarr; '오동도 입구' 정류장에서 하차
                        <br />약 10분 소요
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Place;
