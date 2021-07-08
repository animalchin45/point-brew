import React from 'react'

const BeerOptions = ({ beers, onBeerSelect }) => {
    const renderedBeers = beers.map((beer) => {
        return (
            <li 
                className="beers__beer"  
            >
                <button 
                    className="beers__beer__img"
                    style={{backgroundImage: `url(${beer.logoImg})`}}
                    key={beer.id}
                    onClick={() => onBeerSelect(beer)} 
                >   
                </button>
                <h3 className="beers__beer__title">{beer.title}</h3> 
            </li>
        )
    })

    return (
        <ul className="beeroptions">
            {renderedBeers}
        </ul>
    )
}

export default BeerOptions