// Dependeincies
import { FaTrophy } from "react-icons/fa"
import { BsPeopleFill } from "react-icons/bs"
import { GoFileSubmodule } from "react-icons/go"

// Styling
import "./aboutMe.css"

// Assets
import imgSection from "../../assets/me-about.jpg"

export const AboutMe = () => {
    return <div className="section">
        <div className="section--intro">Get To Know Me</div>
        <div className="section--title">About Me</div>
        <div className="about">
            <div className="about--img">
                <div className="img--bg"></div>
                <img src={imgSection} alt="me" />
            </div>
            <div className="about--content">
                <div className="about--cards">
                    <div className="about--single--card">
                        <FaTrophy className="icon" />
                        <h1>Experiance</h1>
                        <p>3+ Years Working</p>
                    </div>
                    <div className="about--single--card">
                        <GoFileSubmodule className="icon" />
                        <h1>Projects</h1>
                        <p>80+ Projects</p>
                    </div>
                    <div className="about--single--card">
                        <BsPeopleFill className="icon" />
                        <h1>Clients</h1>
                        <p>200+ World Wide</p>
                    </div>
                </div>
                <div className="v-2rem"></div>
                <div className="about--para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores adipisci veritatis sequi laudantium, libero vero deleniti! Dolorem, magnam totam dolor deleniti minus culpa illo expedita autem porro perferendis, et impedit.
                </div>
                <div className="v-2rem"></div>
                <button>Lets's Talk</button>
            </div>
        </div>
    </div>
}