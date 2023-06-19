import React from "react";
import './career.css'
import groupCareer from '../assets/Group-career.png'
import groupCareer1 from '../assets/Group-career1.png'
import groupCareer2 from '../assets/Group-career2.png'

const Career = () => {
    return (
        <div id="career-section">
            <div className="career-section">
                <div className="career-text">
                    <div className="career-text1"> <span >Our Works</span><br />  </div>
                    <div className="career-text2"> <span >Our case studies</span></div>
                </div>

            </div>
            <div className="career-section-2">
                <img className="career-sec img-fluid" src={groupCareer} alt='groupCareer' />
                <img className="career-sec img-fluid" src={groupCareer1} alt='groupCareer1' />
                <img className="career-sec img-fluid" src={groupCareer2} alt="groupCareer2" />
            </div>

            <div className="career-sec-3">
                <div className="career-sec-head">
                    <span className="Pricing-Plans-text">Pricing Plans</span><br />
                    <span className="Pricing-Plans-text2">Our Pricing plans</span>
                </div>
            </div>
        </div>

    )
}

export default Career