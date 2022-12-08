// React
import { useState } from "react"
import { useEffect } from "react"

// componets
import { TestimonialsCard } from "./subcomponents/testimonialsCard"

// Styling
import "./testimonials.css"

export const Testimonials = () => {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            if (index === testimonialsList.length - 1) {
                setIndex(0)
            } else {
                setIndex((index) => index + 1)
            }
        }, 1500)

        return () => clearInterval(interval);
    }, [index])

    return <div className="section section--testimonials">
        <div className="section--intro">Reviews From Clients</div>
        <div className="section--title">Testimonials</div>
        {<TestimonialsCard {...testimonialsList[index]} />}
    </div>
}

const testimonialsList = [
    {
        name: "Kevin P. West",
        image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ymx1ZSUyMG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60",
        testimonial: "Product bring 10x multiplier in terms of both ease and spread of use. I'm able to quickly and easily execute on my marketing strategies. That the fundamental difference from other services."
    },
    {
        name: "Tino Snow",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60",
        testimonial: "Love your stuff, the quality has been incredible year after year. I tell everyone I know that they have to try the product. Thank you to the team the whole team."
    },
    {
        name: "Steven M. Shah",
        image: "https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60",
        testimonial: "These folks are my go-to for any design or branding services. Excellent communication and I feel like I'm always a priority for them."
    },
    {
        name: "Ferdinand B. Perez",
        image: "https://images.unsplash.com/photo-1498758536662-35b82cd15e29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Ymx1ZSUyMG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60",
        testimonial: "The company really helped with my personal branding - everything from conception to execution was amazing and super professional. Looking forwards for upgradation."
    },
    {
        name: "Cynthia R. Burgos",
        image: "https://images.unsplash.com/photo-1547527392-bd5d50305ca0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8d29tYW4lMjBtdXNsaW18ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60",
        testimonial: "Insights from service drove 30% lift in our conversions, this product service is essential for your company growth strategy."
    },
    {
        name: "Justin S. Johnson",
        image: "https://images.unsplash.com/photo-1597388090778-de40843ab728?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Ymx1ZSUyMG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60",
        testimonial: "It has changed the way I used the website. Product lets you create anything you envision and it does it so easy and flawless. I can't imagine not working with the service."
    }

]