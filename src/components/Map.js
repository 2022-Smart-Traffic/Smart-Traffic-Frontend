import React, { useEffect } from 'react';
import KakaoMapScript from "./kakaomapscript";
import '../styles/map.css'
import BusData from '../utils/BusData';
import BusPosition from '../utils/BusPosition';

export default function Map() {

    // 한 번만 실행
    useEffect(() => {
        KakaoMapScript();
        BusData();
        BusPosition();
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