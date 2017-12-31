import React from 'react'
import Hero from '../components/hero'
let ServicesHero = '/BashCorpImgRoot/Tokyo.jpg'

class Services extends React.Component{

    render(){
        return(
            <div>
                <Hero url={ServicesHero} height={'200px'}>
                    <h2>Services</h2>
                </Hero>
                
                <h3>Frameworks</h3>
                <p>
                    We've got years of experience in both <strong>AngularJS</strong> and 
                    <strong>React</strong>, built on both open-source platforms such as
                    <strong>NodeJS</strong> and <strong>Microsoft IIS 8</strong>.
                </p>
                <p>
                    We also have many years experience delivering excellent, exciting and
                    new applications in the Microsoft .Net stack: both <strong>Umbraco</strong>
                    and <strong>Sitecore 8</strong> websites for some really large organisations.
                </p>
                <h3>Platforms</h3>
                <p>We&lsquo;re most at home on Windows, but also know our way around MacOS and Linux
                based systems, with experience working in <strong>AWS</strong> and <strong>Azure</strong>.
                <h3>Toolsets</h3>
                <p>We're passionate advocates of both TDD and BDD, with rock-solid skills in:</p>
                <ul>
                    <li>Karma/Jasmine</li>
                    <li>NUnix/XUnit</li>
                    <li>SpecFlow</li>
                    <li>TeamCity and Jenkins</li>
                    <li>Octopus Deploy and Kubernetes</li>
                    <li>Docker and Vagrant</li>
                </ul>
                <p>Have a look at our <a href="/portfolio">Portfolio</a> to see some of the places
                and projects we've been part of and, if you want, give us a call!</p>
            </div>
        );
    }

}

export default Services