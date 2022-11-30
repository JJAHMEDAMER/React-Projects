export const Card = (props) => {
    return <div className="card">
        <img className="card--image" src={props.image} alt="recipe-img" />
        <div className="card--gradient"></div>
        <h1 className="card--title">{props.title}</h1>
    </div>
}