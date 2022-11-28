import { Link } from "react-router-dom";
const Nav = () => {

    return (
        <nav>
            <ul className="nav-links">
                <Link to="/"><li>Home</li></Link>
                <Link to="/deals"><li>Deals</li></Link>
                <Link to="/popular"><li>Popular</li></Link>
                <Link to="/basket"><li>Basket</li></Link>
            </ul>
        </nav>
    )
}

export default Nav;