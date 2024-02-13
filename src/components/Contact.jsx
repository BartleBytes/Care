// components/Contact

import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <section id="contact" className="contact">
            <div className="container">
                <h2>Contact Us</h2>
                <form action="#">
                    <input type="text" placeholder="Your Name" />
                    <input type="email" placeholder="Your Email" />
                    <textarea placeholder="Your Message"></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
        </section>
        

    );
}

export default Contact;
