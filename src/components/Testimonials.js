import React from "react";

// My components
import EmilyTestimonial from "./EmilyTestimonial";
import Thomas from "./ThomasTestimonial";
import JennieTestimonial from "./JennieTestimonial";

const Testimonials = ()=> {
    return(
        <div className="item-seven">
            <h1>Client Testimonials</h1>
            <div className="testimonials">
                <EmilyTestimonial/>
                <Thomas/>
                <JennieTestimonial/>
            </div>
        </div>
        
    );
}


export default Testimonials