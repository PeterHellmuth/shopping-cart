import { Link } from "react-router-dom"

function NavBar({totalCartItems}){

    return  (<div className="nav-bar">
                <h1 className="store-title">Stuffmart</h1>
                <div className="nav-menu">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/Store/" className="nav-link">Store</Link>
                    <Link to="/Cart/" className="nav-link image-container"><img className="icon" src="../media/cart-outline.svg" />({totalCartItems})</Link>
                </div>
            </div>)
}

export default NavBar