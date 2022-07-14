import Search from "./Search";
import "../styles/header.css";

export default function Header() {
    return (
        <header>
            <p className="header-text">This is Header!</p>
            <Search />
        </header>
    )
}