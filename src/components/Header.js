import Search from "./Search";
import "../styles/header.css";

export default function Header(props) {
    return (
        <header>
            <p className="header-text">Smart-Traffic</p>
            <Search setBusStopInfo={props.setBusStopInfo} />
        </header>
    )
}