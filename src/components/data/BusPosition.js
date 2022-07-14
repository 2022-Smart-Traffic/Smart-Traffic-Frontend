import { useState , useEffect } from "react";
import BusData from "./BusData";
import axios from "axios";

const BusPosition = () => {
    const [ busP , setBusPosition ] = useState([]);
    const BusList = BusData();
    if (BusList[0].lineid._text) {
        console.log('test');
    }
    const fetchData = async() => {
        const result = await axios.get(`/api/bus/busStop?lineId=${BusList[0].lineid._text}&lineNo=${BusList[0].buslinenum._text}`);
        setBusPosition(result.data);
    }
    useEffect(()=>{
        fetchData();
    },[])

    return (
        <div>
            {JSON.stringify(busP)}
        </div>
    );
}
export default BusPosition;