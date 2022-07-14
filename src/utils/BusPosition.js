import { useState , useEffect } from "react";
import BusData from "./BusData";
import axios from "axios";

function BusPosition() {
    const [ busP , setBusPosition ] = useState([]);
    const BusList = BusData();
    if (BusList[0].lineid._text) {
        console.log('test');
    }
    const fetchData = async() => {
        const result = await axios.get(`/api/bus/busStop?lineId=${BusList[0].lineid._text}&lineNo=${BusList[0].buslinenum._text}`);
        setBusPosition(result.data);
    }
    // useEffect(()=>{
    //     fetchData();
    // },[])

    fetchData();
    return JSON.stringify(busP);
}
export default BusPosition;