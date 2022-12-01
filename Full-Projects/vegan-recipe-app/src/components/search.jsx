import { useState } from "react"

//Routing
import { NavLink } from "react-router-dom"

//icons
import { FiSearch } from "react-icons/fi"

export const Search = ({ onChangeHandler }) => {
    const [searchInput, setSearchInput] = useState("");

    return <div className="search--container">
        <div className="search">
            <NavLink to={searchInput === "" ? "/" : `/cuisine/${searchInput}`}>
                <FiSearch size="25" color="white" />
            </NavLink>
            <input type="text" className="search--input" onChange={(changes) => (setSearchInput(changes.target.value))} />
        </div>
    </div>
}