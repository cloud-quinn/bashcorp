import React from 'react'
import Hero from '../components/hero'
import ExternalLink from '../components/externalLink'

let ServicesHero = '/BashCorpImgRoot/Tokyo.jpg'

class Services extends React.Component{

    render(){
        document.title = 'Services available from BashCorp Ltd.'
        return(
            <div>
                <Hero url={ServicesHero} height={'200px'}>
                    <h1>Services</h1>
                </Hero>
                
                <h2>Frameworks</h2>
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
                <ul>
                    <li>Entity Framework</li>
                    <li>Enterprise Library/Unity IoC Container</li>
                    <li>ASP.Net MVC / WebForms / MVP (plus a little .Net Core)</li>
                    <li>
                        <abbr title="Service-oriented architecture">SOA</abbr> using <abbr title="Windows Communication Foundation">WCF</abbr> and WebAPI
                    </li>
                </ul>
                <h2>Platforms</h2>
                <p>We&lsquo;re most at home on Windows, but also know our way around MacOS and Linux
                based systems, with experience working in <strong>AWS</strong> and <strong>Azure</strong>.</p>
                <h3>Toolsets</h3>
                <p>We're passionate advocates of both TDD and BDD, with rock-solid skills in:</p>
                <ul>
                    <li>
                        <ExternalLink url="https://karma-runner.github.io/2.0/" text="Karma" /> / 
                        <ExternalLink url="https://jasmine.github.io/" text="Jasmine" />
                    </li>
                    <li>
                        <ExternalLink url="http://nunit.org" text="NUnit" /> /
                        <ExternalLink url="https://xunit.github.io/" text="XUnit" />
                    </li>
                    <li>
                        <ExternalLink url="http://specflow.org/" text="SpecFlow" />
                    </li>
                    <li>
                        <ExternalLink url="https://www.jetbrains.com/teamcity/" text="TeamCity" /> and 
                        <ExternalLink url="https://jenkins-ci.org/" text="Jenkins" />
                    </li>
                    <li>
                        <ExternalLink url="https://octopus.com/" text="Octopus Deploy" /> and 
                        <ExternalLink url="https://kubernetes.io/" text="Kubernetes" />
                    </li>
                    <li>
                        <ExternalLink url="https://www.docker.com/" text="Docker" /> and 
                        <ExternalLink url="https://www.vagrantup.com/" text="Vagrant" />
                    </li>
                </ul>
                <p>Have a look at our <a href="/portfolio">Portfolio</a> to see some of the places
                and projects we've been part of and, if you want, give us a call!</p>
                <h2><a id="rates"></a>Rates</h2>
                <p>Our rates depend on what you need and where you need us- remote working is a lot cheaper for us than
                on-site working, plus it helps to save the environment <span className="green">♻︎</span>.  We can easily reach Manchester,
                Birmingham, Nottingham and can get to Liverpool and London.</p>
                <p>Generally, our day rate is between &pound;300-400 for remote and &pound;400-500 on-site; 
                though that's only a guide.  <ExternalLink url="https://www.gov.uk/guidance/ir35-find-out-if-it-applies" text="IR35" />, 
                distance and a whole bunch of stuff go into it.  Give us a call and we'll negotiate 😀.</p>
            </div>
        );
    }

}

export default Services