import React from 'react'

const Social = ({ socialType }) => {
    const socialLinks = `${socialType}__links`
    const socialTag = `${socialType}__tag`

    return (
        <div className={socialType}>
            <div className={socialLinks}>
                <a href="www.twitter.com">
                    <i className="fab fa-twitter-square"></i>
                </a>
                <a href="www.instagram.com">
                    <i className="fab fa-instagram-square"></i>
                </a>
                <a href="www.facebook.com">
                    <i className="fab fa-facebook-square"></i>
                </a>
            </div>
            <div className={socialTag}>
                <p>
                    Coastal beers inspired by surf culture
                </p>
            </div>
        </div>
    )
}

export default Social