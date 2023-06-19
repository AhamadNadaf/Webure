import React from "react";
import Home from "./home/home";
import Header from "./header/header";
import AboutUs from "./about/aboutUs";
import Services from './services/services'
import Career from "./career/career";
import Client from "./Clients/clients";
import Footer from "./footer/footer";

const Index = () => {
    return(
        <>
        <Header />
        <Home />
        <AboutUs />
        <Services />
        <Career />
        < Client/>
        <Footer/>
        </>
    )
}

export default Index