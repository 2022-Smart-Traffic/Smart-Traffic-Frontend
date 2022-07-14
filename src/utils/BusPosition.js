import { useState , useEffect } from "react";
import axios from "axios";

async function BusPosition(lineId, lineNo) {
    const busPos = (await axios.get(`/api/bus/busStop?lineId=${lineId}&lineNo=${lineNo}`)).data;
    console.log(busPos);
    return busPos;
}

export default BusPosition;// X Y 반환