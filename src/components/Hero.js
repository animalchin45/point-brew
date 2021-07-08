import React from 'react'
import Title from './Title.js'
import Social from './Social.js'

const Hero = () => {
    return (
        <section className="hero">
            <Title />
            <Social socialType='social' />
        </section>
    )
}

export default Hero