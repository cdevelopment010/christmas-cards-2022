import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
const Nav = ( { basketCount }) => {

    let nav = useNavigate();
    

    useEffect(() => {
        
    }, [])

    const goToBasket = () => {
        nav('/basket')
    }

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
                <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
                <i className="fa-solid fa-basket-shopping basket" onClick={goToBasket}>
                    <h5 className="basket-count text-center d-grid align-items-center justify-content-center">{basketCount}</h5>
                </i>
            </div>
        </nav>
    )
}

export default Nav;