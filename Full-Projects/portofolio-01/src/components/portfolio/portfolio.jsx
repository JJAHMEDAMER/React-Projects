// Styling
import "./portfolio.css"

//Assets
import img_01 from "../../assets/portfolio1.jpg"
import img_02 from "../../assets/portfolio2.jpg"
import img_03 from "../../assets/portfolio3.jpg"
import img_04 from "../../assets/portfolio4.jpg"
import img_05 from "../../assets/portfolio5.png"
import img_06 from "../../assets/portfolio6.jpg"


export const Protfolio = () => {
    return <div className="section portfolio--section">
        <div className="section--intro">My Recent Work</div>
        <div className="section--title">Portfolio</div>
        <div className="portfolio--grid">
            <div className="portfolio--card">
                <img className="portfolio--img" src={img_01} alt="portfolio1.jpg" />
                <div className="portfolio--content">
                    <div className="portfolio--title">Crypto Currency Dashboard & Financial Visualization</div>
                    <div className="portfolio--btns">
                        <button className="sec-btn">GitHub</button>
                        <button>Demo</button>
                    </div>
                </div>
            </div>

            <div className="portfolio--card">
                <img className="portfolio--img" src={img_02} alt="portfolio2.jpg" />
                <div className="portfolio--content">
                    <div className="portfolio--title">Crypto Currency Dashboard & Financial Visualization</div>
                    <div className="portfolio--btns">
                        <button className="sec-btn">GitHub</button>
                        <button>Demo</button>
                    </div>
                </div>
            </div>

            <div className="portfolio--card">
                <img className="portfolio--img" src={img_03} alt="portfolio3.jpg" />
                <div className="portfolio--content">
                    <div className="portfolio--title">Crypto Currency Dashboard & Financial Visualization</div>
                    <div className="portfolio--btns">
                        <button className="sec-btn">GitHub</button>
                        <button>Demo</button>
                    </div>
                </div>
            </div>

            <div className="portfolio--card">
                <img className="portfolio--img" src={img_04} alt="portfolio4.jpg" />
                <div className="portfolio--content">
                    <div className="portfolio--title">Crypto Currency Dashboard & Financial Visualization</div>
                    <div className="portfolio--btns">
                        <button className="sec-btn">GitHub</button>
                        <button>Demo</button>
                    </div>
                </div>
            </div>

            <div className="portfolio--card">
                <img className="portfolio--img" src={img_05} alt="portfolio5.jpg" />
                <div className="portfolio--content">
                    <div className="portfolio--title">Crypto Currency Dashboard & Financial Visualization</div>
                    <div className="portfolio--btns">
                        <button className="sec-btn">GitHub</button>
                        <button>Demo</button>
                    </div>
                </div>
            </div>

            <div className="portfolio--card">
                <img className="portfolio--img" src={img_06} alt="portfolio6.jpg" />
                <div className="portfolio--content">
                    <div className="portfolio--title">Crypto Currency Dashboard & Financial Visualization</div>
                    <div className="portfolio--btns">
                        <button className="sec-btn">GitHub</button>
                        <button>Demo</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}