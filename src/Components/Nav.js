import { Link } from "react-router-dom";
const Nav = () => {

    return (
        <nav>
            <div>
                <h2>LOGO</h2>
                <ul className="nav-links">
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/deals"><li>Deals</li></Link>
                    <Link to="/popular"><li>Popular</li></Link>
                    <Link to="/basket"><li>Basket</li></Link>
                </ul>
            </div>
            <div>
                <input type="text" placeholder="search..." />

            </div>
        </nav>
    )
}

export default Nav;