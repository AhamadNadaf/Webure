import React from 'react';
import './home.css'
import group from '../assets/Group.png'
import union from '../assets/Union.png'
import union1 from '../assets/Union1.png'
import linkedInIcon from '../assets/linkedin-icon.png'
import faceboolIcon from '../assets/facebook-icon.png'
import instagramIcon from '../assets/instagram-icon.png'
import twitterIcon from '../assets/twitter-icon.png'
import youtubeIcon from '../assets/youtube-icon.png'
import whatsappIcon from '../assets/whatsapp-icon.png'
import beIcon from '../assets/Be-icon.png'
import pintrusIcon from '../assets/pintrush-icon.png'
import slack from '../assets/slack.png'
import marketo from '../assets/marketo.png'
import stripe from '../assets/stripe.png'
import razorpay from '../assets/razorpay.png'

const Home = () => {
    return (
        <div id="home">
            <div className='home-section img-fluid' id="home-section" >
                {/* Heading part */}
                <div className='heading-div'>
                    <div className='text1'>
                        <h1>We esure and transfeorm<br /> business growing</h1>

                    </div>
                    <div className='text2'>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />Lorem Ipsum has been the industry's standard dummy text</p>
                    </div>
                    <div className='button-div'>
                        <button className='button1'>Get Started</button>
                        <button className='button2'>Learn More</button>
                    </div>
                </div>

                {/*Center image part /  grounp and cloud image part  */}
                <div className='row'>
                    <div className='d-flex justify-content-center'>
                        <div>
                            <img className="img-fluid union" src={union} alt='union-img' />
                        </div>
                        <div>
                            <img className="img-fluid group" src={group} alt='group-img' />
                        </div>
                        <div>
                            <img className="img-fluid union" src={union1} alt='union-img' />
                        </div>
                    </div>

                    {/* Icon part */}
                    <div className='icon-div  d-flex justify-content-between'>

                        {/* Left side icons */}
                        <div className='left-icons '>
                            <img className="img-fluid linkedIn-icon" src={linkedInIcon} alt='linkedIn-icon' />
                            <img className="img-fluid facebool-Icon " src={faceboolIcon} alt='facebool-Icon' />
                            <img className="img-fluid instagram-icon" src={instagramIcon} alt='instagram-icon' />
                            <img className="img-fluid twitter-icon " src={twitterIcon} alt='twitter-icon' />
                        </div>

                        {/* Right side icon part */}
                        <div className='rigth-icon'>
                            <img className="img-fluid youtube-icon " src={youtubeIcon} alt='youtube-icon' />
                            <img className="img-fluid whatsapp-icon " src={whatsappIcon} alt='whatsapp-ico' />
                            <img className="img-fluid be-icon " src={beIcon} alt='be-icon' />
                            <img className="img-fluid pintrus-icon " src={pintrusIcon} alt='pintrus-icon' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='bottom-text-div'>
                <h2 >Trust by over 20 compaies</h2>
            </div>


            <div className='promo-logos'>
                <div className='promo-logo-slide'>
                    <img src={slack} alt='slack' />
                    <img src={marketo} alt='marketo' />
                    <img src={stripe} alt='stripe' />
                    <img src={razorpay} alt='razorpay' />
                    <img src={slack} alt='slack' />
                    <img src={marketo} alt='marketo' />
                    <img src={stripe} alt='stripe' />
                    <img src={razorpay} alt='razorpay' />
                </div>
                <div className='promo-logo-slide'>
                    <img src={slack} alt='slack' />
                    <img src={marketo} alt='marketo' />
                    <img src={stripe} alt='stripe' />
                    <img src={razorpay} alt='razorpay' />
                    <img src={slack} alt='slack' />
                    <img src={marketo} alt='marketo' />
                    <img src={stripe} alt='stripe' />
                    <img src={razorpay} alt='razorpay' />
                </div>
            </div>
            <div className='hr-line' id="liness">
                <hr className='line' ></hr>
            </div>
        </div>
    )
}

export default Home;