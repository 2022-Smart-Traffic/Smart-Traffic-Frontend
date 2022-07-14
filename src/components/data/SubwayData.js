import axios from "axios";
import { useEffect, useState } from "react";

const SubwayData = () => {
    const [ SubwayList , setSubwayList ] = useState([]);
    const fetchData = async() => {
        const result = await axios.get('/bssm.kro.kr/data');
        setSubwayList(result.data);
    }
    useEffect(()=>{
        fetchData();
    },[])

    console.log(SubwayList);
    return SubwayList;
};

export default SubwayData;