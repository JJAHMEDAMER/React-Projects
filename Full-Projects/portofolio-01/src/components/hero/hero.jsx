//Dependencies
import { GrLinkedin } from "react-icons/gr"
import { FaGithubSquare, FaLinkedin, } from "react-icons/fa"

// Styling
import "./hero.css"

// Images
import heroImg from "../../assets/me.png"

export const Hero = () => {
    return <div className="section">
        <div className="hero">
            <h2>Hello I'm</h2>
            <h1>Ahmed Amer</h1>
            <h3>Fullstack Developer</h3>
            <div className="v-3rem"></div>
            <div className="hero--btns">
                <button className="sec-btn">Download CV</button>
                <button> Let's Talk</button>
            </div>
            <div className="v-3rem"></div>
            <div className="hero--content">
                <div className="hero--icons">
                    <FaLinkedin />
                    <FaGithubSquare />
                    <div className="line"></div>
                </div>
                <img src={heroImg} alt="ahmed-amer-img" className="hero--img" />
                <p className="hero--sroll--down">SCROLL DOWN</p>
            </div>

        </div>
    </div>
}