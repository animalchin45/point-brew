import React from 'react'
import Modal from 'react-modal'

const BeerModal = ({ selectedBeer, clearSelectedBeer, openModal }) => {
    return (
        <Modal
            isOpen={openModal}
            onRequestClose={clearSelectedBeer}
            contentLabel="Selected Beer"
            closeTimeoutMS={200}
            className="modal"
        >
            {selectedBeer && 
                <div className="modal__selectedbeer">
                    <a 
                        href="#display"
                        className="btn btn--back" 
                        onClick={() => clearSelectedBeer()}>Back
                    </a>
                    <img 
                        src={selectedBeer.glassImg} 
                        alt="beer glass" 
                        className="modal__glass"
                    />
                    <div>
                        <h3>{selectedBeer.title}</h3>
                        <p className="modal__selectedbeer--desc">{selectedBeer.description}</p>
                        <p>ABV: {selectedBeer.abv}</p>
                        <p>IBU: {selectedBeer.ibu}</p>
                    </div>
                </div>
            }
            
        </Modal>
    )
}

export default BeerModal