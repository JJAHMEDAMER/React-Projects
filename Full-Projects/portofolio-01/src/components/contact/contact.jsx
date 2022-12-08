// Dependencies
import { MdMarkEmailRead } from "react-icons/md"
import { FaFacebookMessenger, FaWhatsapp } from "react-icons/fa"


// Styling
import "./contact.css"

export const Contact = () => {
    return <div className="section contact--section" id="contact">
        <div className="section--intro">Get In Touch</div>
        <div className="section--title">
            Contact Me
        </div>

        <div className="contact">
            <div className="contact--card--container">
                <div className="contact--card">
                    <MdMarkEmailRead className="icon" />
                    <div className="contact--card--title">Email</div>
                    <div className="contact--card--subtitle">LoremIpsum@gmail.com</div>
                    <div className="conatct--card--tagline">Send a Message</div>
                </div>
                <div className="contact--card">
                    <FaFacebookMessenger className="icon" />
                    <div className="contact--card--title">Facebook Massenger</div>
                    <div className="contact--card--subtitle">@LoremIpsum</div>
                    <div className="conatct--card--tagline">Send a Message</div>
                </div>
                <div className="contact--card">
                    <FaWhatsapp className="icon" />
                    <div className="contact--card--title">Whatsapp</div>
                    <div className="contact--card--subtitle">010 000 000 000</div>
                    <div className="conatct--card--tagline">Send a Message</div>
                </div>
            </div>

            <div className="contact--form">
                <input type="text" placeholder="Your Full Name" className="contact--form--input" />
                <input type="email" placeholder="Your Email" className="contact--form--input" />
                <textarea rows="8" placeholder="Type a message..." className="contact--form--input" />
                <button>Send Message</button>
            </div>
        </div>

    </div>
} 