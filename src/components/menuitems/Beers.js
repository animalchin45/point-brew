import React, { useState } from 'react'
import BeerModal from './BeerModal'
import BeerOptions from './BeerOptions'
import { v4 as uuidv4 } from 'uuid'

const beers = [
    {
        id: uuidv4(),
        title: 'Cowabunga IPA',
        description: 'A great smooth citrus IPA',
        abv: 7.4,
        ibu: 90,
        logoImg: "../img/ipa.png",
        glassImg: "../img/beerglass.png"
    },
    {
        id: uuidv4(),
        title: 'Party Wave Session',
        description: 'Ride these crunchy waves dude!',
        abv: 8.4,
        ibu: 80,
        logoImg: "../img/partywave.png",
        glassImg: "../img/beerglass.png"
    },
    {
        id: uuidv4(),
        title: 'Point Break Ale',
        description: 'This yummy ale is rad.',
        abv: 5.2,
        ibu: 86,
        logoImg: "../img/pointbreak.png",
        glassImg: "../img/beerglass.png"
    },
    {
        id: uuidv4(),
        title: 'Tubular Lager',
        description: 'Totally good vibes bro!',
        abv: 6.3,
        ibu: 75,
        logoImg: "../img/tubular.png",
        glassImg: "../img/beerglass.png"
    }

]

const Beers = () => {
    const [selectedBeer, setSelectedBeer] = useState([])
    const [openModal, setOpenModel] = useState(false)

    const onBeerSelect = (beer) => {
        setSelectedBeer(beer)
        setOpenModel(true)
    }

    const clearSelectedBeer = () => {
        setOpenModel(false)

        setTimeout(() => {
            setSelectedBeer([])
        }, 200)
        
    }

    return (
        <div className="beers">
            <BeerOptions 
                beers={beers} 
                onBeerSelect={onBeerSelect}
            />
            
            <BeerModal 
                clearSelectedBeer={clearSelectedBeer}
                openModal={openModal}
                selectedBeer={selectedBeer}
            />
        </div>
    )
}

export default Beers