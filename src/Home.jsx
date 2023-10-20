import { Link } from "react-router-dom"
function Home(){
    return  (<div className="home-page">
                <p>Buy all this stuff please.</p>
                <Link to="/store/"><button className="store-button">Open the store!</button></Link>
            </div>)
}

export default Home