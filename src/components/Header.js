import Search from "./Search";
import "../styles/header.css";

export default function Header() {
    return (
        <div className="header">
            <p className="header-text">This is Header!</p>
            <Search />
        </div>
    )
}