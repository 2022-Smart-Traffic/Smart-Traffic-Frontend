import axios from "axios";
import { useEffect, useState } from "react";

const BusData = ( props ) => {
    const [ BusList , setBusList ] = useState([]);
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

    return (
        <div>
            <p>테스트</p>
            <div>
                {JSON.stringify(BusList)}
            </div>
        </div>
    );
};

export default BusData;