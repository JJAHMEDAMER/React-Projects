import { useEffect } from "react"
import { useState } from "react"

//comp
import { Card } from "./card"

export const VeganPicksView = () => {

    const [veganApiRes, setVeganApiRes] = useState([])

    async function getVeganRes() {
        const veganDataFromStorage = localStorage.getItem("vegan")

        if (veganDataFromStorage) {
            setVeganApiRes(JSON.parse(veganDataFromStorage))
        } else {
            const URL = `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&number=9`
            const apiStringyRes = await fetch(URL)
            const apiJsonRes = await apiStringyRes.json()
            console.log(apiJsonRes.recipes)
            setVeganApiRes(apiJsonRes.recipes)
            localStorage.setItem("vegan", JSON.stringify(apiJsonRes.recipes))
        }
    }

    useEffect(() => {
        getVeganRes();
    }, [])

    return <div className="carousel--view">
        <h1 className="carousel--view--title">Vegan Picks</h1>
        <div className="carousel--view--scroll">
            {veganApiRes.map((item) => (<Card {...item} key={item.id} />))}
        </div>
    </div>
}