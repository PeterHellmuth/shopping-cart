import { Link } from "react-router-dom"
import cartImage from "../media/cart-outline.svg"

function NavBar({totalCartItems}){
    return  (<div className="nav-bar">
                <Link to="/" className="nav-link"><h1 className="store-title">Stuffmart</h1></Link>
                <div className="nav-menu">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/Store/" className="nav-link">Store</Link>
                    <Link to="/Cart/" className="nav-link image-container"><img className="icon" src={cartImage} />({totalCartItems})</Link>
                </div>
            </div>)
}

export default NavBar