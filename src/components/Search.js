import { useState } from "react"
import SampleData from "./data/Sample";
import '../styles/header.css';
import BusData from './data/BusData';

const Search = () => {
    const [ searchList , setSearchList ] = useState('');
    return (
        <div>
            <input type="text" placeholder="test" onChange={event => {setSearchList(event.target.value)}}></input>
            <ul>
                {SampleData.filter((value)=>{
                    if ( searchList === "" ) {
                        return value;
                    }
                    else if ( value.name.toLowerCase().includes( searchList.toLowerCase() ) ) {
                        return value;
                    }
                }).map((value,key) => {
                    return <li>{value.name}</li>;
                })}
            </ul>
        </div>
    )
}

export default Search;