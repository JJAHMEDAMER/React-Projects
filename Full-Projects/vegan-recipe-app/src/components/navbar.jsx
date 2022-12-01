import {NavLink} from "react-router-dom"

export const Navbar = () => {
    return <NavLink to={"/"} className="navbar">
        <h1 className="navbar--title">World Wide Recipes</h1>
    </NavLink>;
}