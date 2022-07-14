import { useState, useRef } from "react"
import axios from "axios";
import '../styles/header.css';

const Search = () => {
    const [ busLineList , setBusLineList ] = useState([]);
    const searchBarRef = useRef();

    const getBusList = async (query) => {
        return (await axios.get(`/api/bus/search?lineNo=${query}`)).data;
    }

    const keyDownHandler = async (event) => {
        if (event.key == 'Enter') {
            setBusLineList(await getBusList(searchBarRef.current.value));
        }
    }

    return (
        <div className="busline-search">
            <input
                type="text"
                placeholder="버스 노선 검색"
                onKeyDown={keyDownHandler}
                ref={searchBarRef}
            ></input>
            <ul className="busline-search-list">
                {busLineList.map((busLine, i) => {
                    return (
                        <li key={i}>
                            {busLine.buslinenum._text}
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}

export default Search;