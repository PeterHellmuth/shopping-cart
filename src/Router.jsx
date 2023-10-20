import {RouterProvider, createBrowserRouter} from "react-router-dom"
import App from "./App";
import ErrorPage from './ErrorPage.jsx'
import Home from './Home'
import Store from './Store'
import Cart from './Cart'

function Router(){
    const router = createBrowserRouter([
        {
          path: "/",
          element: <App />,
          errorElement: <ErrorPage />,
          children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: "/Store/",
                element: <Store/>
            },
            {
                path: "/Cart/",
                element: <Cart/>
            }
          ]
        },

      ]);

    return <RouterProvider router={router} />
}


export default Router