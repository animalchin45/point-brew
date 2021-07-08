import React from 'react'
import MenuItemDisplay from './MenuItemDisplay'
import Menu from './Menu'

const Details = ({ menuItems, selectedMenuItem, setSelectedMenuItem }) => {
    return (
        <section className="details">
            <MenuItemDisplay 
                selectedMenuItem={selectedMenuItem}
            />
            <Menu 
                menuItems={menuItems} 
                setSelectedMenuItem={setSelectedMenuItem}
            />
        </section>
    )
}

export default Details