import React from "react";
import arrow from '../assets/arrow-right.png'
import logo from '../assets/Logo_WO.png'
import './header.css'

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light sticky-top " style={{"backgroundColor":"#FFFFFF"}}>
            <div className="container-fluid">
                
                <a className="navbar-brand"  href="#">
                <img  src={logo} className="logo" />
                Webure
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                    <div className="navbar-nav ">
                        <a className="nav-link active"  style={{"margin-left": "50px"}} aria-current="page" href="#">
                            <span className="span-home">Home</span>
                        </a>
                        <a className="nav-link " style={{"margin-left": "50px"}} href="#liness">
                            About Us
                        </a>
                        <a className="nav-link"  style={{"margin-left": "50px"}} href="#service">
                            Services
                        </a>
                        <a className="nav-link" style={{"margin-left": "50px"}} href="#career-section">
                            Career
                        </a>
                        <a className="nav-link" style={{"margin-left": "50px"}} href="#client-section">
                            Clientele
                        </a>
                        <a href="#footer-section" className="nav-link" style={{ "background": "#FF5D22","border-radius": "50px" ,"margin-left": "50px", "border":"0px"}}><span style={{"color": "#FFFFFF", "width": "95px","height": "25px", "margin":"10px"}}>Contact Us <img  style={{"margin-bottom": "5px", "margin-left":"5px"}} src={arrow} alt="arrow"/></span></a>
                    </div>
                </div>
            </div>
        </nav>

    )
}

export default Header;