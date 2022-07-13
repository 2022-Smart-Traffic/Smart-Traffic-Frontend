import React from "react";
import { Link } from 'react-router-dom';
import '../styles/main.css';
import { ReactComponent as BusIcon } from '../svg/bus.svg';

export const MainComponent = () => {
    return (
        <div className="main">
            <div className="main--quick-menu">
                <Link to="/bus">
                    <div className="main--quick-menu-icon-wrap">
                        <BusIcon className="main--quick-menu-icon" />
                    </div>
                    <span>버스</span>
                </Link>
                <Link to="/subway">
                    <div className="main--quick-menu-icon-wrap">
                        <BusIcon className="main--quick-menu-icon" />
                    </div>
                    <span>지하철</span>
                </Link>
                <Link to="/taxi">
                    <div className="main--quick-menu-icon-wrap">
                        <BusIcon className="main--quick-menu-icon" />
                    </div>
                    <span>택시</span>
                </Link>
            </div>
        </div>
    );
}