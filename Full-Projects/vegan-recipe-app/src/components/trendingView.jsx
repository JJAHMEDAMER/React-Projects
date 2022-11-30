import { useEffect } from "react"
import { useState } from "react"

// Comp
import { Card } from "./card"

export const TrendingView = () => {

    const [trendingApiRes, setTrendingApiRes] = useState([])

    async function getTrendingRes() {
        const URL = `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&number=9`
        const apiResString = await fetch(URL);
        const apiResJson = await apiResString.json()
        console.log(apiResJson)
        setTrendingApiRes(apiResJson.recipes)
    }

    // useEffect(() => {
    //     getTrendingRes();
    // },[])

    return <div>
        <h1 onClick={getTrendingRes}>Trending</h1>
        <div>
            {trendingApiRes.map((item) => (<Card {...item} key={item.id} />))}
        </div>
    </div>
}