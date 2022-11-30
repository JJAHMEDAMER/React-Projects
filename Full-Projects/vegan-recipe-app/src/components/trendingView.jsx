import { useEffect } from "react"
import { useState } from "react"

// Comp
import { Card } from "./card"

// FakeData
import { fakeData } from "../fakeData"

export const TrendingView = () => {

    const [trendingApiRes, setTrendingApiRes] = useState([])

    async function getTrendingRes() {
        const URL = `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&number=1`
        const apiResString = await fetch(URL);
        const apiResJson = await apiResString.json()
        console.log(apiResJson)
        setTrendingApiRes(apiResJson.recipes)
    }

    useEffect(() => {
        // getTrendingRes();
        setTrendingApiRes([...fakeData, ...fakeData, ...fakeData, ...fakeData, ...fakeData, ...fakeData])
    }, [])

    return <div className="trending--view">
        <h1 className="trending--view--title" onClick={getTrendingRes}>Trending</h1>
        <div className="trending--view--scroll">
            {trendingApiRes.map((item) => (<Card {...item} key={item.id} />))}
        </div>
    </div>
}