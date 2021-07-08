import React from 'react'

const MenuItem = ({ menuItems, setSelectedMenuItem }) => {
    const renderedItems = menuItems.map((item) => {
        return (
            <a 
                key={item}
                href="#display"
                className="btn btn--menu" 
                onClick={() => setSelectedMenuItem(item)}
            >
                {item}
            </a>
        ) 
    })
    return (
        <div className="menu__items">
            {renderedItems}
        </div>
    )
}

export default MenuItem