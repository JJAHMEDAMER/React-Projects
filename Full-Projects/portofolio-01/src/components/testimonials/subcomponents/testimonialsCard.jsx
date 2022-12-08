export const TestimonialsCard = (props) => {
    return <div className="testimonials--card">
        <img src={props.image} alt="" className="testimonials--img" />
        <div className="testimonials--title">{props.name}</div>
        <div className="testimonials--para">{props.testimonial}</div>
    </div>
}