import React from 'react'
import Hero from '../components/hero'
import ExternalLink from '../components/externalLink'
let ServicesHero = '/BashCorpImgRoot/Urquhart.jpeg'
let cipfa = '/BashCorpImgRoot/carousel/CIPFA.png'
let bbc = '/BashCorpImgRoot/carousel/bbcTaster.png'
let cccu = '/BashCorpImgRoot/carousel/cccuPortal.png'
let cricketSoc = '/BashCorpImgRoot/carousel/cricket-society.png'
let eon = '/BashCorpImgRoot/carousel/eonHeat.png'

class Portfolio extends React.Component {

    render(){
        return (
            <div>
                <Hero url={ServicesHero} height={'200px'}>
                    <h1>Portfolio</h1>
                </Hero>
                <p>Here are some examples of our work that we're particularly proud of!</p>
                <p>Some of these projects, such as the BBC, were done as freelancers where we were employed
                within IR35, and others as projects for clients through BashCorp, such as e.on.</p>
                <h2>BBC Taster</h2>
                <img src={bbc} alt="" className="full-width" />
                <p>
                    We both had the great pleasure of working with the BBC in the Research and Development department at Dock House
                    in Salford Quays.  We spent 3 months in the <em>Taster</em> team, working with a great staff and helping to deliver new
                    features and fixes to their existing JavaScript/Ruby-based <ExternalLink url="https://www.bbc.co.uk/taster"
                    text="Taster" /> website.
                </p>
                <p>
                    The site showcases new and cutting-edge experimental tech from the BBC and allows visitors
                    to sample it- bringing in great feedback on what people like and what they find useful.
                </p>
                <p>
                    Note although both of us worked here for 3 months, it was on individual contracts due to IR35/Public Sector
                    requirements so this was not a BashCorp assignment.
                </p>
                <h2>E.On Heat</h2>
                <img src={eon} alt="" className="full-width" />
                <p>
                    E.On are doing some exciting things!  Their platform is based on .Net/Sitecore 8 and BashCorp worked
                    for 3 months on their Heat project.
                </p>
                <p>
                    Heat is a community heating service, useful for customers in apartments who might save money by sharing
                    heaters/boilers.  This website was brought in-house and we worked in a large team to integrate it into
                    Sitecore 8.1 and re-brand it in the modern, response e.on styles.
                </p>
            </div>
        )
    }

}

export default Portfolio