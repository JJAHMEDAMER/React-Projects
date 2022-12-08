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
            <div className="floatingNavbar--icon">
                <CiHome className="icon" />
            </div>
            <div className="floatingNavbar--icon">
                <RxPerson className="icon" />
            </div>
            <div className="floatingNavbar--icon">
                <BsPatchCheck className="icon" />
            </div>
            <div className="floatingNavbar--icon">
                <VscTools className="icon" />
            </div>
            <div className="floatingNavbar--icon">
                <HiOutlineChatBubbleLeftEllipsis className="icon" />
            </div>
        </div>
    </div>
}