import React from "react";

function Header() {
    const roles = {admin: "nishant", developer: "Akshay"}
    return (
        <div>
            <h1>Welcome to the React Training by {roles.admin}</h1>
        </div>
    )
}
export default Header