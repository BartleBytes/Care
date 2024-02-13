// components/Home.js

import React from 'react';
import Aboutme from './Aboutme';
import Services from "./Services";
import Testimonials from "./Testimonial"
import Welcome from './Welcome';




function Home() {
    return (
        <div>
            <div className="about-me">
                <Aboutme />
            </div>
            <div className="services">
                <Services />
            </div>
            <div className="welcome">
                <Welcome />
            </div>
            <div className="testimonials">
                <Testimonials />
            </div>
        </div>
    );
}

export default Home;
