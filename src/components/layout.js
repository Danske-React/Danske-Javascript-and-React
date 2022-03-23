import React from "react";
import { Outlet, Link } from "react-router-dom";

function Layout() {
    return(
        <div>
            <nav>
            <ul>
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/inventory">Inventory</Link>
                </li>
                <li>
                    <Link to="/prop">Component1 for prop drilling </Link>
                </li>
            </ul>
            </nav>
            {/* <Outlet/> */}
        </div>
    )
}
export default Layout