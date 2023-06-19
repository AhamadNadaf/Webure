import React from "react";
import './abouthUS.css'
import webDesign1 from '../assets/web-design-1.png'
import webDesign2 from '../assets/web-design-2.png'
import webDesign3 from '../assets/web-design-3.png'
import aboutGroupImg from '../assets/about-group-img.png'
import readMore from '../assets/readMore.png'

const AboutUs = () => {
    return (
        <div className="about">

            <div className="about-section" id='about-section'>
                <div className="heading-1">
                    <h3>Here how it works</h3>
                </div>
                <div className="heading-2">
                    <h1>Simple process to start</h1>
                </div>


            </div>
            <section className="about-center-section">
                <div className="about-center-sec">
                    <img className="img-fluid abou-sec-img " src={webDesign3} alt='webDesign1' />
                    <h3 >Digital analysis</h3>
                    <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                </div>
                <div className="about-center-sec mid-card">
                    <img className="img-fluid abou-sec-img " src={webDesign2} alt='webDesign1' />
                    <h3 >Digital marketing</h3>
                    <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>

                </div>

                <div className="about-center-sec">
                    <img className="img-fluid abou-sec-img " src={webDesign1} alt='webDesign1' />
                    <h3 >Email marketing</h3>
                    <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                </div>
            </section>

            <div className="all-features-button">
                <button>All Features</button>
            </div>

            <div className="about-2-grid">
                <div className="card-sec-2">
                    <h2 className="h2-sec">Web Solutions</h2>
                    <h1>Strategics experiences ad visual appeal</h1>
                    <p style={{ "color": "#828282" }}>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                    <img src={readMore} alt='readMore' className="readMore" />
                </div>
                <div className="card-sec-2">
                    <img className="img-fluid" src={aboutGroupImg} alt="aboutGroupImg"></img>
                </div>
            </div>

            <section className="about-box-section"> 
                <div className="about-box"><sapn className="number-span">6</sapn><sapn className="word-sapn">Years in Field</sapn></div>
                <div className="about-box"><sapn className="number-span">10+</sapn><sapn className="word-sapn">Expertes</sapn></div>
                <div className="about-box"><sapn className="number-span">50+</sapn><sapn className="word-sapn">Projects</sapn></div>
                <div className="about-box"><sapn className="number-span">20+</sapn><sapn className="word-sapn">Agency Prtners</sapn></div>

            </section>

        </div>
    )
}

export default AboutUs