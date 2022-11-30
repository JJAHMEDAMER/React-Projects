//Comp
import { VeganPicksView, TrendingView, CategoriesButton } from "../components"

export const HomePage = () => {
    return <div>
        <CategoriesButton/>
        <div className="v-spacing"></div>
        <VeganPicksView/>
        <div className="v-spacing"></div>
        <TrendingView/>
    </div>
}
