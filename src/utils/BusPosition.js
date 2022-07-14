import { useState , useEffect } from "react";
import BusData from "./BusData";
import axios from "axios";

async function BusPosition() {
    const BusList = await BusData();
    const busP = (await axios.get(`/api/bus/busStop?lineId=${BusList[0].lineid._text}&lineNo=${BusList[0].buslinenum._text}`)).data;
    console.log(busP);
    return busP;
}

export default BusPosition;// X Y 반환