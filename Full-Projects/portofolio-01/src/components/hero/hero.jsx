//Dependencies
import { FaGithubSquare, FaLinkedin, } from "react-icons/fa"

// Styling
import "./hero.css"

// Assets
import heroImg from "../../assets/me.png"

export const Hero = () => {
    return <div className="section">
        <h2 className="section--intro">Hello I'm</h2>
        <h1 className="section--title">Ahmed Amer</h1>
        <h3 className="section--tagline">Fullstack Developer</h3>
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
}