import React, {useContext} from "react";
import Hoc from "./higherOrder";
import Footer from "./footer";



function Header() {
    const roles = {admin: "nishant", developer: "Akshay"}
    return (
        <div>
            <h1>Welcome to the React Training by {roles.admin}</h1>
        </div>
    )
}
// Header = Hoc(Footer) // hoc
export default Header