// Styling
import "./testimonials.css"

// Assets
import avatar_01 from "../../assets/avatar1.jpg"

export const Testimonials = () => {
    return <div className="section section--testimonials">
        <div className="section--intro">Reviews From Clients</div>
        <div className="section--title">Testimonials</div>
        <div className="testimonials--card">
            <img src={avatar_01} alt="" className="testimonials--img" />
            <div className="testimonials--title">
                Tino Snow
            </div>
            <div className="testimonials--para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis tempore, quod, quaerat vitae tenetur deleniti ab voluptates iusto assumenda labore debitis dolor nihil nam odio laudantium! Sapiente similique quidem molestiae?
            </div>
        </div>
    </div>
}