import axios from "axios";
import { useEffect, useState } from "react";

const BusData = () => {
    const [ BusList , setBusList ] = useState([]);
    const fetchData = async() => {
        const result = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
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