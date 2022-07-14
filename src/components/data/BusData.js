import axios from "axios";
import { useEffect, useState } from "react";

function BusData(){
    let [ BusList , setBusList ] = useState([]);
    const n = '강서구2'
    const fetchData = async() => {
        const result = await axios.get(`/api/bus/search?lineNo=${n}`);
        setBusList(result.data);
    }
    useEffect(()=>{
        fetchData();
    },[])

    if ( !BusList ) {
        return <div>로딩 중입니다.......</div>;
    }

    // let lineid = BusList[0].lineid._text;
    // let buslinenum = BusList[0].buslinenum._text
    return BusList;
};

export default BusData;