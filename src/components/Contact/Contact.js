import React from 'react';
import './Contact.scss';
import Slide from 'react-reveal/Slide';

const Contact = () => {
    return (
        <div className="contact" id="contact">
            <h2>Get in Touch</h2>
            <Slide bottom>
                <div className="contact_container">
                    <ul>
                        <li><a href="https://www.linkedin.com/in/santiagobarraza/"><i class="fab fa-linkedin-in fa-4x"></i></a></li>
                        <li><a href="https://github.com/MartinSantiagoBarraza"><i class="fab fa-github fa-4x"></i></a></li>
                        <li><a href="mailto:martinsbarraza@gmail.com"><i class="far fa-envelope fa-4x"></i></a></li>
                    </ul>
                </div>
            </Slide>
            <hr />
            <div className="footer_list">
                <p>Portfolio created using React and Sass.</p>
                <p>&copy; 2021</p>
            </div>
        </div>
    )
}

export default Contact