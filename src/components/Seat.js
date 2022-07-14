import { useState, useEffect } from "react"
import axios from "axios";
import '../styles/seat.css';

export const Seat = () => {
    const [ seatList , setSeatList ] = useState([]);
    let cnt = 1;

    useEffect(() => {
        (async () => {
            setSeatList(await getSeatList());
        })();
    }, []);

    const getSeatList = async (query) => {
        return (await axios.get('/api/bus/seat')).data;
    }

    const getSeatInfo = (status) => {
        switch (status) {
            case -1: {
                return 'seat';
            }
            case 1: {
                return 'seat using';
            }
            default: {
                return '';
            }
        }
    }

    return (
        <div className="seat-component">
            <h1>버스 좌석 사용 현황</h1>
            <div className="seat_wrap">{
                seatList.map((rows, i) => {
                    return (
                        <div className="rows" key={i}>{
                            rows.map((seat, j) => {
                                return (
                                    <div className={getSeatInfo(seat)} key={i, j}>
                                        {cnt++}번
                                    </div>
                                );
                            })
                        }</div>
                    )
                })
            }</div>
        </div>
    );
}