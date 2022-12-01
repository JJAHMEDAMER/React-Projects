//icons
import { FiSearch } from "react-icons/fi"

export const Search = ({onChangeHandler}) => {
    return <div className="search--container">
        <div className="search">
            <FiSearch size="25" color="white" />
            <input type="text" className="search--input" onChange={(changes)=> onChangeHandler(changes.target.value)} />
        </div>
    </div>
}