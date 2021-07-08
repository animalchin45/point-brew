import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Hero from './components/Hero'
import Details from './components/Details'
import Hamburger from './components/Hamburger'
import menuItems from './components/menuitems/menuItems'

const Brewery = () => {
    const [selectedMenuItem, setSelectedMenuItem] = useState('About Us')
    
    return (
        <div className="site_wrapper">
            <Hamburger 
                menuItems={menuItems} 
                setSelectedMenuItem={setSelectedMenuItem}    
            />
            <Hero />
            <Details 
                menuItems={menuItems} 
                selectedMenuItem={selectedMenuItem}
                setSelectedMenuItem={setSelectedMenuItem}
            />
        </div>
    )
}

ReactDOM.render(<Brewery />, document.querySelector('#root'))