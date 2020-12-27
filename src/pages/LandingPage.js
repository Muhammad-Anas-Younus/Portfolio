import React from 'react'
import Header from './Header'
import Me from 'F:/Web Development/Gatsby/portfolio/assets/IMG_20201006_211730 (2).jpg'
import Glask from 'F:/Web Development/Gatsby/portfolio/assets/Capture2.png'
import Cheffy from 'F:/Web Development/Gatsby/portfolio/assets/Capture3.png'
import Productry from 'F:/Web Development/Gatsby/portfolio/assets/Capture.png'
import emailjs from "emailjs-com";
import swal from 'sweetalert';


function LandingPage() {

    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_0kgqjln', 'template_ob0y4on', e.target, 'user_20q4WjHdQFBEsaHjU6IRi')
        .then((result) => {
        console.log(result.text);
        }, (error) => {
        console.log(error.text);
        });
        swal("Message Sent!", "I will get back to you asap!", "success");
        }

    return (
        <div id='landing-page'>
            <Header/>
            <div id="hero">
                <div className="left">
                    <h2>HI,</h2>
                    <h1>I'M MUHAMMAD ANAS</h1>
                    <h2>A FULL STACK DEVELOPER</h2>
                    <a href="#contact"><button>LET'S TALK</button></a>
                </div>
                <div className="right">
                    <img className='image' src={Me} alt=""/>
                    <div className="rectangle"></div>
                </div>
            </div>
            <div id="skillsSection">
                <div className="heading">
                    <h1>MY ARSENAL.</h1>    
                </div>
                <div className="icons">
                    <div className="icons_container-1"></div>
                    <div className="icons_container-2"></div>
                    <div className="icons_container-3"></div>
                    <div className="icons_container-4"></div>
                    <div className="icons_container-5"></div>
                    <div className="icons_container-6"></div>
                    <div className="icons_container-7"></div>
                </div>
            </div>
            <div id="aboutMe">
                <h1>ABOUT ME!?</h1>
                <ul>
                    <li>Hi there, i'm a self-taught web developer who is passionate about technology.</li>
                    <li>I've been writing code since the age of 13.</li>
                    <li>I am motivated and self driven.</li>
                    <li>I love to solve other people's problems through software</li>
                </ul>
            </div>
            <div id="myWork">
                <h1>MY WORK.</h1>
                <p>Merely a glimpse of what i'm capable of.</p>
                <div className="item ">
                    <div className="item_navigation">
                        <h2>GLASK</h2>
                        <a target='_blank' href="https://glask-ecom.web.app/">Go to website</a>
                    </div>
                    <div className="case_study">
                        <p>Glask is a fictional e-commerce store that sells prescription glasses.</p>
                        <div className="technologies_used"> 
                            <p><strong>BUILT USING:</strong>React, Context Api, Material Ui, Firebase.</p>
                        </div>
                    </div>
                    <div className="image_container">
                        <img src={Glask} alt=""/>
                    </div>
                </div>
                <div className="item ">
                    <div className="item_navigation">
                        <h2>CHEFFY BITES</h2>
                        <a target='_blank' href="https://cheffy-bites.web.app/">Go to website</a>
                    </div>
                    <div className="case_study">
                        <p>Cheffy Bites is a website built for a local restaurant.</p>
                        <div className="technologies_used"> 
                            <p><strong>BUILT USING:</strong>React and Firebase.</p>
                        </div>
                    </div>
                    <div className="image_container">
                        <img src={Cheffy} alt=""/>
                    </div>
                </div>
                <div className="item">
                <div className="item_navigation">
                        <h3>PRODUCTRY</h3>
                        <a target='_blank' href="https://flamboyant-jang-c7be49.netlify.app/index.html">Go to website</a>
                    </div>
                    <div className="case_study">
                        <p>Productry is a fictional product photography company.</p>
                        <div className="technologies_used"> 
                            <p><strong>BUILT USING:</strong>Html, Css and Javascript.</p>
                        </div>
                    </div>
                    <div className="image_container">
                        <img src={Productry} alt=""/>
                    </div>
                </div>
            </div>
            <div id="contact">
                <h1>LET'S TALK</h1>
                <form onSubmit={sendEmail} className="contact_form">
                    <input required type="text" name='name' placeholder='Your Name'/>
                    <input required type="text" name='email' placeholder='Your Email'/>
                    <input required type="text" name='message' placeholder='Message'/>
                    <button>SEND MESSAGE</button>
                </form>
            </div>
        </div>
    )
}

export default LandingPage
