import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Error from "./components/Error"
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Login from "./components/Login";

import RestaurantMenu from './components/RestaurantMenu';

import { createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";


const App =() => {
    return(
        <div className="App">
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/Contact",
                element: <Contact />,
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu/>,
            },

            

        ],
    },
    {
        path: "/Login",
        element: <Login />,
    },
]);



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <RouterProvider router={appRouter} />
        
    );