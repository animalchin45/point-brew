import React from 'react'
import AboutUs from './menuitems/AboutUs'
import Beers from './menuitems/Beers'
import Events from './menuitems/Events'
import News from './menuitems/News'

const MenuItemDisplay = ({ selectedMenuItem }) => {
    const onMenuItemSelect = (selectedMenuItem) => {
        if (selectedMenuItem === 'About Us') {
            return (
                <AboutUs />
            )
        }
        if (selectedMenuItem === 'Beers') {
            return (
                <Beers />
            )
        }
        if (selectedMenuItem === 'Events') {
            return (
                <Events />
            )
            
        } 
        if (selectedMenuItem === 'News') {
            return (
                <News />
            )
            
        }
    }

    return (
        <div id="display" className="menuitemdisplay">
            {onMenuItemSelect(selectedMenuItem)}
        </div>
    )
}

export default MenuItemDisplay