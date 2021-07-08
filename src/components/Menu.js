import React from 'react'
import MenuItem from './MenuItem'

const Menu = ({ menuItems, setSelectedMenuItem }) => {
    return (
        <div className="menu">
            <MenuItem 
                menuItems={menuItems} 
                setSelectedMenuItem={setSelectedMenuItem}
            />
        </div>
    )
}

export default Menu