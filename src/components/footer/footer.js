import React from "react";
import './footer.css'
import fb from '../assets/fb.png'
import insta from '../assets/insta.png'
import yt from '../assets/youtube.png'
import twit from '../assets/twitter.png'
import mail from '../assets/gmail.png'

const Footer = () => {
    return (
        <div className="footer-section" id="footer-section">
            <div className="footer-back-image">
                <div className="footer-block">
                    <div className="Our-Company-div">
                        <h2>Our Company</h2>
                        <p>About Webure<br />
                            Pricing<br />
                            Referral Program<br />
                            #GivingBackToCommunity<br />
                            Employee Referral<br />
                            Our Culture<br />
                            Corporate Social Responsibility<br />
                            Careers<br />
                            Contact Us<br />
                            FAQs</p>
                    </div>
                    <div className="Build-Your-Team-div">
                        <h2>Build Your Team</h2>
                        <p>How It Works<br />
                            Why offshore<br />
                            Pricing Estimator <br />
                            Video Profiles<br />
                            About Webure<br />
                            Remote Blogs<br />
                            Take The Assignment</p>
                    </div>

                    <div className="Services-div-footer">
                        <h2>Services</h2>
                        <p>SEO Service<br />
                            SME Service<br />
                            Email Marketing<br />
                            Design Services<br />
                            Front-End Development<br />
                            Wordpress Devlopment<br />
                            HubSpot Development<br />
                            Marketo Autoimotion<br />
                            Salesforce Automation</p>
                    </div>

                    <div className="Resources-footer">
                        <h2>Resources</h2>
                        <p>Blogs<br />
                            Prodcast<br />
                            Case Studies<br />
                            Testimonials<br />
                            eBooks<br />
                            Infographics</p>

                    </div>

                </div>
                <div className="footer-hr">
                    <hr className='footer-line'></hr>
                </div>

                <div className="footer-sec-2">
                    <div className="footer-sec-2-div1">
                        <span>Sign up for Webure Emails</span>
                        <input type="text" className="footer-email-input"></input>

                    </div>
                    <div className="footer-sec-2-div2">
                        <span>Sign up for Webure Emails</span>

                        <select className="footer-region">
                            <option>India</option>
                            <option>US</option>
                            <option>UK</option>
                        </select>
                    </div>
                    <div className="socail-media-icons">
                        <div className="img-fluid social-media"><img src={fb} alt="fb" /> </div>
                        <div className="img-fluid social-media"><img src={yt} alt="yt" /> </div>
                        <div className="img-fluid social-media"><img src={twit} alt="twit" /> </div>
                        <div className="img-fluid social-media"><img src={mail} alt="mail" /> </div>
                        <div className="img-fluid social-media"><img src={insta} alt="insta" /> </div>

                    </div>
                </div>

                <div className="footer-sec-3">
                    <sapn className="footer-sec-3-span">+91-0123456789 <br />sales@webure.in</sapn>
                </div>

                <div className="footer-hr">
                    <hr className='footer-line'></hr>
                </div>

                <div className="footer-sec-4">
                    <div className="footer-sec-4-1">
                        <sapn>India,<br />
                            <sapn style={{ "color": "#F2C94C" }}>Bangalore</sapn>   <br />
                            #310G, Whitefield Post Office<br /> Road, Whiefield, Bangalore,<br /> Karnataka 560103, India</sapn>
                            <div className="vertical-line"></div>
                    </div>
                    

                    <div className="footer-sec-4-1">
                        <div className="footer-sec-4-1-1">
                        <sapn>Cannada<br />
                            <sapn style={{ "color": "#F2C94C" }}>Hamilton</sapn><br />
                            155-2 King Street West Unit <br />#145 Hamilton, ON L8P 4S0 <br />Canada</sapn></div>
                            <div className="vertical-line"></div>

                    </div>

                   


                    <div className="footer-sec-4-1">
                        <sapn>New York<br />
                            <sapn style={{ "color": "#F2C94C" }}>New York City</sapn><br />
                            One World Trade Center, 285 <br />Fulton Street Suite 8500, New<br /> York City NY 10007, USA</sapn>
                    
                            <div className="vertical-line"></div>
                            </div>
                    

                    <div className="footer-sec-4-1">
                        <sapn>New Zealand<br />
                            <span style={{ "color": "#F2C94C" }}>Auckland</span><br />
                            Level 26, HSBC Tower, 188<br /> Quay Street, Auckland, AUK<br /> 1010 New Zealand</sapn>
                    </div>
                    
                </div>
                <div className="footer-hr-1">
                    <hr className='footer-line-1'></hr>
                </div>

                <div className="footer-end">
                    <span>© 2021 Webure Technologies. All rights reserved. Privacy Policy  |  ISMS Policy</span>
                </div>
            </div>






        </div>
    )
}

export default Footer