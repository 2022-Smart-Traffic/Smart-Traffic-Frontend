import { useState } from "react"
import SampleData from "./data/Sample";
const Search = () => {
    const [ searchList , setSearchList ] = useState('');
    return (
        <div>
            <input type="text" placeholder="test" onChange={event => {setSearchList(event.target.value)}}></input>
            {SampleData.filter((value)=>{
                if ( searchList === "" ) {
                    return value;
                }
                else if ( value.name.toLowerCase().includes( searchList.toLowerCase() ) ) {
                    return value;
                }
            }).map((value,key) => {
                return <div>{value.name}</div>;
            })}
        </div>
    )
}

export default Search;