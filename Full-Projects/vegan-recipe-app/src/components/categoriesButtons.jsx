// Routes
import { NavLink } from "react-router-dom"

//Icons
import { FaPizzaSlice, FaHamburger } from "react-icons/fa"
import { GiNoodles, GiChopsticks } from "react-icons/gi"

export const CategoriesButton = () => {

    return <div className="categories--all">
        <NavLink to={"/cuisine/italian"} className="categories">
            <div className="categories--circle">
                <FaPizzaSlice size={25} />
            </div>
            <p className="categories--title">Italian</p>
        </NavLink>
        <NavLink to={"/cuisine/American"} className="categories">
            <div className="categories--circle">
                <FaHamburger size={25} />
            </div>
            <p className="categories--title">American</p>
        </NavLink>
        <NavLink to={"/cuisine/thai"} className="categories">
            <div className="categories--circle">
                <GiNoodles size={25} />
            </div>
            <p className="categories--title">Thai</p>
        </NavLink>
        <NavLink to={"/cuisine/japanese"} className="categories">
            <div className="categories--circle">
                <GiChopsticks size={25} />
            </div>
            <p className="categories--title">Japanese</p>
        </NavLink>
    </div>
}