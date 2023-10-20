import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

function ErrorPage(){
    const error = useRouteError();
    return(
        <div className="error-page">
            <h1>This isn&apos;t a page</h1>
            <Link to="/">Click here to return to the home page.</Link>
        </div>
    )
}

export default ErrorPage