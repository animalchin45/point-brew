import React from 'react'

const AboutUs = () => {
    return (
        <div className="article fade-in">
            <h3 className="article__title">About Us</h3>
            <div className="article__text">
                <p>We are passionate about crafting unique and inspired craft beers using locally sourced ingredients. Our goal is to continue to brew beers for the discerning beer connoisseur. From sours to barrel aged stouts and everything in between, we proudly represent the Southern California craft beer movement.</p>
            </div>    
            <div>
                <h3 className="article__title">Hours</h3>
                <div className="article__text">
                    <p>Sunday: 3pm - 7pm</p>
                    <p>Monday - Thursday: 3pm - 9pm</p>
                    <p>Friday - Saturday: 2pm - 11pm</p>
                </div>
                
            </div>
            <div>
                <div className="title-mobile--sub">
                    <h2>
                        2000 Industry Way<br/>
                        San Jose, CA 90083
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default AboutUs