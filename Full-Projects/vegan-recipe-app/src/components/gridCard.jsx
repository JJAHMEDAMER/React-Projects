// Routes
import { Link } from "react-router-dom"

export const GridCard = (props) => {
    return <Link to={"/recipe-details/" + props.title} state={props}>
        <div className="gridCard">
            <img className="gridCard--image" src={props.image} alt="img" />
            <h1 className="gridCard--title">{props.title}</h1>
        </div>
    </Link>
}