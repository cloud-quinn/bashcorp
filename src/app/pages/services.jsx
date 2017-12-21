import React from 'react'
import Hero from '../components/hero'
import ServicesHero from '../assets/hero/Tokyo.jpg'

class Services extends React.Component{

    render(){
        return(
            <div>
                <Hero url={ServicesHero} height={'200px'}>
                    <h2>Services</h2>
                </Hero>
                <p>
                    stuff
                </p>
            </div>
        );
    }

}

export default Services