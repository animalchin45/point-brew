import React, { useState } from 'react'
import Social from './Social.js'
import MenuItem from './MenuItem'

const Hamburger = ({ menuItems, setSelectedMenuItem }) => {
    const [hamburgerClass, setHamburgerClass] = useState(`hamburger hamburger--spin`)
    const [mobileNavLinksClass, setMobileNavLinksClass] = useState({
        opacity: 1,
        left: -1200
    })

    const handleMenuClick = () => {
        setHamburgerClass(`hamburger hamburger--spin`)
        setMobileNavLinksClass({
            opacity: 0,
            left: '-1200px'
        })
    }

    const handleHamburgerClick = () => {
        if (hamburgerClass === `hamburger hamburger--spin`) {
            setHamburgerClass(`hamburger hamburger--spin is-active`)
            setMobileNavLinksClass({
                opacity: 1,
                left: '0'
            })
        } else {
            setHamburgerClass(`hamburger hamburger--spin`)
            setMobileNavLinksClass({
                opacity: 0,
                left: '-1200px'
            })
        }
    }
    
    return (
        <div className="mobile-nav">
            <nav className="mobile-nav__links" onClick={() => handleMenuClick()} style={mobileNavLinksClass}>
                <MenuItem
                    menuItems={menuItems} 
                    setSelectedMenuItem={setSelectedMenuItem}
                />
                <Social socialType='social-mobile' />
            </nav> 
            <button className={hamburgerClass} onClick={() => handleHamburgerClick()} type="button">
                <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                </span>
            </button>
        </div>
    )
}

export default Hamburger