//icons
import { FiSearch } from "react-icons/fi"

export const Search = () => {
    return <div className="search--container">
        <div className="search">
            <FiSearch size="25" color="white" />
            <input type="text" className="search--input" />
        </div>
    </div>
}