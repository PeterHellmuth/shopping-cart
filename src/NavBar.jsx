import { Link } from "react-router-dom"

function NavBar(){
    return  (<div className="nav-bar">
                <h1>Buy-mart</h1>
                <div className="nav-menu">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/Store/" className="nav-link">Store</Link>
                    <Link to="/Cart/" className="nav-link">Cart</Link>
                </div>
            </div>)
}

export default NavBar