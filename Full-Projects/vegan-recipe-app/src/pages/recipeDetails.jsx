// Router
import { useLocation } from "react-router-dom"

export const RecipeDetails = () => {
    const location = useLocation();
    const props = location.state

    console.log(props.analyzedInstructions)

    return <div className="recipePage">
        <h1 className="recipe--title">{props.title}</h1>
        <img src={props.image} alt="" />
        <p>Time to Cook <span>{props.readyInMinutes}</span></p>
        {props.analyzedInstructions.map((item) => (
            <ul>{item.steps.map(item =>
                (<li>{item.step}</li>)
            )}
            </ul>
        )
        )}
    </div>
}