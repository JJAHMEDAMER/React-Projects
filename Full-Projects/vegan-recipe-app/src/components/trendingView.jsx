import { useEffect } from "react"
import { useState } from "react"

// Comp
import { Card } from "./card"

export const TrendingView = () => {

    const [trendingApiRes, setTrendingApiRes] = useState([])

    async function getTrendingRes() {

        const trendingDataFromStorage = localStorage.getItem("trending")
        if (trendingDataFromStorage) {
            setTrendingApiRes(JSON.parse(trendingDataFromStorage))
        } else {
            const URL = `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&number=9`
            const apiResString = await fetch(URL);
            const apiResJson = await apiResString.json()
            localStorage.setItem("trending", JSON.stringify(apiResJson.recipes))
            console.log(apiResJson.recipes)
            setTrendingApiRes(apiResJson.recipes)
        }
    }

    useEffect(() => {
        getTrendingRes();
    }, [])

    return <div className="trending--view">
        <h1 className="trending--view--title">Trending</h1>
        <div className="trending--view--scroll">
            {trendingApiRes.map((item) => (<Card {...item} key={item.id} />))}
        </div>
    </div>
}