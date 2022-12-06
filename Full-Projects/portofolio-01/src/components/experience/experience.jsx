// Dependencies
import { BsPatchCheckFill } from "react-icons/bs"

// Styling
import "./experience.css"

export const Experience = () => {
    return <div className="section exp-section">
        <div className="section--intro">What Skills I have</div>
        <div className="section--title">My Experience</div>

        <div className="experience--card--container">
            <div className="experience--card">
                <h1 className="experience--card--title">Front End Skills</h1>
                <div className="experience--card--element">
                    <BsPatchCheckFill className="icon" />
                    <div>
                        <h1 className="skill">HTML</h1>
                        <p className="level">Pro</p>
                    </div>
                </div>
                <div className="experience--card--element">
                    <BsPatchCheckFill className="icon" />
                    <div>
                        <h1 className="skill">CSS</h1>
                        <p className="level">Intermediate</p>
                    </div>
                </div>
                <div className="experience--card--element">
                    <BsPatchCheckFill className="icon" />
                    <div>
                        <h1 className="skill">Next Js</h1>
                        <p className="level">Intermediate</p>
                    </div>
                </div>
                <div className="experience--card--element">
                    <BsPatchCheckFill className="icon" />
                    <div>
                        <h1 className="skill">React</h1>
                        <p className="level">Pro</p>
                    </div>
                </div>
                <div className="experience--card--element">
                    <BsPatchCheckFill className="icon" />
                    <div>
                        <h1 className="skill">JavaScript</h1>
                        <p className="level">Pro</p>
                    </div>
                </div>
            </div>

            <div className="experience--card">
                <h1 className="experience--card--title">Back End Skills</h1>
                <div className="experience--card--element">
                    <BsPatchCheckFill className="icon" />
                    <div>
                        <h1 className="skill">Python</h1>
                        <p className="level">Pro</p>
                    </div>
                </div>
                <div className="experience--card--element">
                    <BsPatchCheckFill className="icon" />
                    <div>
                        <h1 className="skill">MySQL</h1>
                        <p className="level">Basic</p>
                    </div>
                </div>
                <div className="experience--card--element">
                    <BsPatchCheckFill className="icon" />
                    <div>
                        <h1 className="skill">APIs</h1>
                        <p className="level">Pro</p>
                    </div>
                </div>
                <div className="experience--card--element">
                    <BsPatchCheckFill className="icon" />
                    <div>
                        <h1 className="skill">PHP</h1>
                        <p className="level">Basic</p>
                    </div>
                </div>
                <div className="experience--card--element">
                    <BsPatchCheckFill className="icon" />
                    <div>
                        <h1 className="skill">Node JS</h1>
                        <p className="level">Intermediate</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
}