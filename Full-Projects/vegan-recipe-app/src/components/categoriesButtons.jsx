import { FaPizzaSlice, FaHamburger } from "react-icons/fa"

import { GiNoodles, GiChopsticks } from "react-icons/gi"

export const CategoriesButton = () => {

    return <div className="categories--all">
        <div className="categories">
            <div className="categories--circle">
                <FaPizzaSlice size={25} />
            </div>
            <p className="categories--title">Italian</p>
        </div>
        <div className="categories">
            <div className="categories--circle">
                <FaHamburger size={25} />
            </div>
            <p className="categories--title">American</p>
        </div>
        <div className="categories">
            <div className="categories--circle">
                <GiNoodles size={25} />
            </div>
            <p className="categories--title">Thai</p>
        </div>
        <div className="categories">
            <div className="categories--circle">
                <GiChopsticks size={25} />
            </div>
            <p className="categories--title">Japanese</p>
        </div>
    </div>
}