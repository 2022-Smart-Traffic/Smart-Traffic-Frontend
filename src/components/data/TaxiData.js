import axios from "axios";
import { useEffect, useState } from "react";

const TaxiData = () => {
    const [ TaxiList , setTaxiData ] = useState([]);
    const fetchData = async() => {
        const result = await axios.get('/bssm.kro.kr/data');
        setTaxiData(result.data);
    }
    useEffect(()=>{
        fetchData();
    },[])

    console.log(TaxiList);
    return TaxiList;
};

export default TaxiData;