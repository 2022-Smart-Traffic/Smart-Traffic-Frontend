import axios from "axios";
import { useEffect, useState } from "react";

async function BusData(props){
    const n = '강서구2'
    const BusList = (await axios.get(`/api/bus/search?lineNo=${n}`)).data;

    // // console.log(BusList[0].lineid._text);
    // // console.log(BusList[0].buslinenum._text);
    // const keywords = [BusList[0].lineid._text,BusList[0].buslinenum._text]
    return BusList;
};

export default BusData;// 정류장 반환