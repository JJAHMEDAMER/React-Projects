// Router
import { useLocation } from "react-router-dom"

export const RecipeDetails = () => {
    const location = useLocation();
    const props = location.state

    return <div className="recipePage">
        <div className="recipePage--hero">
            <div className="flex-col">
                <h1 className="recipe--title">{props.title}</h1>
                <p className="recipe--time">Time to Cook <span className="green-container">{props.readyInMinutes}</span></p>
                <p className="recipe--time">servings <span className="green-container">{props.servings}</span></p>
            </div>
            <img className="recipe--image" src={props.image} alt="" />
        </div>

        <div className="tags">
            {props.vegetarian? <p className="green-container">Vegetarian</p>: null}
            {props.vegan? <p className="green-container">Vegan</p>: null}
            {props.glutenFree? <p className="green-container">Gluten Free</p>: null}
            {props.dairyFree? <p className="green-container">Dairy Free</p>: null}
            {props.veryHealthy? <p className="green-container">Very Healthy</p>: null}
            {props.cheap? <p className="green-container">Cheap</p>: null}
        </div>

        <div className="v-spacing"></div>

        <h1 className="recipe--subtitle">Description</h1>
        <div className="recipe--summary" dangerouslySetInnerHTML={{ __html: props.summary }}></div>

        <div className="v-spacing"></div>

        <h1 className="recipe--subtitle">Steps</h1>
        {props.analyzedInstructions.map((item) => (
            <ul className="recipe--steps">
                {item.steps.map(item => (
                    <li>{item.step}</li>
                ))}
            </ul>
        ))}
    </div>
}