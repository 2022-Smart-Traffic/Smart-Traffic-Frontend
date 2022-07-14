import React, { useEffect } from 'react';
import KakaoMapScript from "./kakaomapscript";
import '../styles/map.css'

export default function Map() {

    // 한 번만 실행
    useEffect(() => {
        KakaoMapScript();
    }, []);

    return (
        // map size
        <div 
            id='myMap'
            className='kakao-map'
        >
        </div>
    );
}