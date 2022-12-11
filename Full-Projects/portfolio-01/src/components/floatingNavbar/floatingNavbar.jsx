// Dependencies
import { CiHome } from "react-icons/ci"
import { RxPerson } from "react-icons/rx"
import { HiOutlineChatBubbleLeftEllipsis } from "react-icons/hi2"
import { BsPatchCheck } from "react-icons/bs"
import {VscTools} from "react-icons/vsc"


// Styling
import "./floatingNavbar.css"

export const FloatingNavbar = () => {
    return <div className="floatingNavbar--container">
        <div className="floatingNavbar">
            <a href="#home" className="floatingNavbar--icon">
                <CiHome className="icon" />
            </a>
            <a href="#about" className="floatingNavbar--icon">
                <RxPerson className="icon" />
            </a>
            <a href="#experiance" className="floatingNavbar--icon">
                <BsPatchCheck className="icon" />
            </a>
            <a href="#services" className="floatingNavbar--icon">
                <VscTools className="icon" />
            </a>
            <a href="#contact" className="floatingNavbar--icon">
                <HiOutlineChatBubbleLeftEllipsis className="icon" />
            </a>
        </div>
    </div>
}