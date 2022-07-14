import Search from "./Search";
import "../styles/header.css";

export default function Header(props) {
    return (
        <header>
            <p className="header-text">This is Header!</p>
            <Search setBusStopInfo={props.setBusStopInfo} />
        </header>
    )
}