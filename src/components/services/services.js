import React from "react";
import '../services/services.css'
import groupService1 from '../assets/Group_service-1.png'
import groupService2 from '../assets/Group_service-2.png'
import groupService3 from '../assets/Group_service-3.png'
import groupService4 from '../assets/Group_service-4.png'


const Services = () => {
    return (
        <div className="services" id='service'>
                <div className="Why-us-text">
                    <span >Why us</span>
                </div>
                <div className="services-text2">
                    <sapn >What makes us <br />stand out</sapn>
                </div>
            


            <div className="service-grid">
                <div className="service-innter-grid">                    
                        <img classNameimg-fluid ="img-fluid service-leftside    " src={groupService1} alt ="service-leftside-1"/>
                        <img classNameimg-fluid ="img-fluid service-leftside " src={groupService2} alt ="service-leftside-1"/>
                        <img classNameimg-fluid ="img-fluid service-leftside " src={groupService3} alt ="service-leftside-1"/>
                </div>
                <div className="service-innter-grid">
                    <img className="img-fluid service-leftside-1 " src={groupService4} alt ="service-leftside-1"/>
                </div>
            </div>
        </div>
    )
}

export default Services;