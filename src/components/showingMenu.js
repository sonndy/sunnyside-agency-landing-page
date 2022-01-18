import React from "react";



const ShowingNavigation = () => {
    return(
        <div className="navigation">
                        <div className="triangle"></div>
                        <ul>
                            <li className="normal-list">About</li>
                            <li className="normal-list">Services</li>
                            <li className="three">Projects</li>
                            <li><span className="contact">Contact</span></li>
                        </ul>
        </div>
    )
}

export default ShowingNavigation;