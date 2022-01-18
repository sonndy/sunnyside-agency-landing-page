import React from "react";

// my components
import GridTwo from "./GridTwo";
import GridOne from "./GridOne";
import GridThree from "./GridThree";
import GridFour from "./GridFour";
import GridFive from "./GridFive";
import GridSix from "./GridSix";
import Testimonials from "./Testimonials";
import Pictures from "./Pictures";
import Footer from "./footer";

const Grid = () => {
    return (
        <div>
            <div className="grid-container">
                <GridOne/>
                <GridTwo/>
                <GridThree/>
                <GridFour/>
                <GridFive/>
                <GridSix/>
                <Testimonials/>
                <Pictures/>
                <Footer/>
            </div>
        </div>
    )
}

export default Grid