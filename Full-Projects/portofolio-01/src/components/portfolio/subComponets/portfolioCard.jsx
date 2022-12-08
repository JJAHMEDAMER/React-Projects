export const PortfolioCard = (props) => {
    return <div className="portfolio--card">
        <img className="portfolio--img" src={props.image} alt="portfolio1.jpg" />
        <div className="portfolio--content">
            <div className="portfolio--title">{props.title}</div>
            <div className="portfolio--btns">
                <a href={props.githubRepo} target="_blank">
                    <button className="sec-btn">GitHub</button>
                </a>
                <a href={props.liveDemo} target="_blank">
                    <button>Demo</button>
                </a>
            </div>
        </div>
    </div>
}