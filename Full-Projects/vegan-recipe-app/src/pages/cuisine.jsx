import { useState, useEffect } from "react"

//comp 
import { GridCard } from "../components"

//fake data
import { fakeData } from "../fakeData"
export const CuisinePage = () => {

    const [cuisineApiRes, setCuisineAPiRes] = useState([])

    async function getCuisineRes(query) {
        const cuisineFromStorage = localStorage.getItem(`${query}`)
        if (cuisineFromStorage) {
            setCuisineAPiRes(JSON.parse(cuisineFromStorage))
        } else {
            const URL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&cuisine=${query}`
            const apiStringyRes = await fetch(URL)
            const apiJsonRes = await apiStringyRes.json()
            //
            localStorage.setItem(`${query}`, JSON.stringify(apiJsonRes.results))
            setCuisineAPiRes(apiJsonRes.results)
            console.log(apiJsonRes.results)
            console.log(apiJsonRes)
        }
    }

    useEffect(() => {
        // getCuisineRes("thai")
        setCuisineAPiRes([...fakeData, ...fakeData, ...fakeData, ...fakeData, ...fakeData, ...fakeData, ...fakeData, ...fakeData, ...fakeData,])
    }, [])

    return <div className="cuisine">
        <p className="cuisine--title">Thai</p>
        <div className="v-spacing"></div>
        <div className="cuisine--grid">
            {cuisineApiRes.map(item => <GridCard {...item} key={item.id} />)}
        </div>
    </div>
}