import axios from "axios";
import { useEffect, useState } from "react";

async function BusData(){
    const n = '강서구2'
    const BusList = (await axios.get(`/api/bus/search?lineNo=${n}`)).data;

    console.log(BusList)
    // let lineid = BusList[0].lineid._text;
    // let buslinenum = BusList[0].buslinenum._text
    return BusList;
};

export default BusData;