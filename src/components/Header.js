import Search from "./Search";
import "../styles/header.css";

export default function Header() {
    return (
        <div className="header">
            <p>This is Header!</p>
            <Search />
        </div>
    )
}