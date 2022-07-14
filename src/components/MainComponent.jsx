import React from "react";
import { Link } from 'react-router-dom';
import '../styles/main.css';
import { ReactComponent as BusIcon } from '../svg/bus.svg';
import Header from "./Header";
export const MainComponent = () => {
    return (
        <div className="main">
            <div className="main--quick-menu">
                <Header />
                <Link to="/map">
                    <div className="main--quick-menu-icon-wrap">
                        <BusIcon className="main--quick-menu-icon" />
                    </div>
                    <span>버스</span>
                </Link>
                <Link to="/subway">
                    <div id="subway" className="main--quick-menu-icon-wrap">
                        <BusIcon className="main--quick-menu-icon" />
                    </div>
                    <span>지하철</span>
                </Link>
                <Link to="/taxi">
                    <div id="taxi" className="main--quick-menu-icon-wrap">
                        <BusIcon className="main--quick-menu-icon" />
                    </div>
                    <span>택시</span>
                </Link>
            </div>
        </div>
    );
}