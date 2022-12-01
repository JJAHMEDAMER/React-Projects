export const GridCard = (props) => {
    return <div className="gridCard">
        <img className="gridCard--image" src={props.image} alt="img" />
        <h1 className="gridCard--title">{props.title}</h1>
    </div>
}