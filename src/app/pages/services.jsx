import React from 'react'
import Hero from '../components/hero'
import ExternalLink from '../components/externalLink'

import ServicesHero from '../../assets/Miyajima.jpeg'

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
                    We&rsquo;ve got years of experience in <strong>AngularJS / Angular 2+</strong> and <strong>React</strong>, 
                    built on both open-source platforms such as <strong>NodeJS</strong> and <strong>Microsoft IIS 8</strong>.
                </p>
                <p>
                    We also have many years experience delivering reliable, performant, responsive applications in the 
                    Microsoft .Net stack: both <strong>Umbraco</strong> and <strong>Sitecore 8</strong> websites for some really large organisations.
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
                <p>We&rsquo;re most at home on Windows, but also know our way around MacOS and Linux
                based systems, with experience working in <strong>AWS</strong> and <strong>Azure</strong>.</p>
                <h3>Toolsets</h3>
                <p>Were passionate advocates of both TDD, BDD and DevOps, with rock-solid skills in:</p>
                <ul>
                    <li>
                        JavaScript Test Frameworks (<ExternalLink url="https://karma-runner.github.io/2.0/" text="Karma" /> / <ExternalLink url="https://jasmine.github.io/" text="Jasmine" />)
                    </li>
                    <li>
                        CSS Preprocessors (<ExternalLink url="http://sass-lang.com/" text="SASS" /> / <ExternalLink url="http://lesscss.org/" text="LESS" />)
                    </li>
                    <li>
                        .Net Test Frameworks (<ExternalLink url="http://nunit.org" text="NUnit" /> / <ExternalLink url="https://xunit.github.io/" text="XUnit" />)
                    </li>
                    <li>
                        Behaviour-driven testing (<ExternalLink url="http://specflow.org/" text="SpecFlow" />)
                    </li>
                    <li>
                        Continuous integration and building (<ExternalLink url="https://www.jetbrains.com/teamcity/" text="TeamCity" /> and <ExternalLink url="https://jenkins-ci.org/" text="Jenkins" />)
                    </li>
                    <li>
                        Continuous deployment and provisioning (<ExternalLink url="https://octopus.com/" text="Octopus Deploy" /> and <ExternalLink url="https://kubernetes.io/" text="Kubernetes" />)
                    </li>
                    <li>
                        Cloud SAAS/PAAS infrastructure providers (<ExternalLink url="http://www.azure.com" text="Azure" /> and <ExternalLink url="http://aws.amazon.com" text="AWS" />)
                    </li>
                    <li>
                        Virtualisation containers (<ExternalLink url="https://www.docker.com/" text="Docker" /> and <ExternalLink url="https://www.vagrantup.com/" text="Vagrant" />)
                    </li>
                </ul>
                <p>Have a look at our <a href="/portfolio">Portfolio</a> to see some of the great teams we&rsquo;ve worked with
                and projects we&rsquo;ve delivered.</p>
                <h2><a id="rates"></a>Rates</h2>
                <p>Our rates depend on what you need and where you need us- remote working is a lot cheaper for us than
                on-site working, plus it helps to save the environment <span className="green">♻︎</span>.  We can easily reach Manchester,
                Birmingham, Leeds, Nottingham and can get to Liverpool and London.</p>
                <p>Generally, our day rate is between &pound;300-400 for remote and &pound;400-500 on-site; 
                though that&rsquo;s only a guide.  <ExternalLink url="https://www.gov.uk/guidance/ir35-find-out-if-it-applies" text="IR35" />, 
                distance and a whole bunch of stuff go into it.</p>
                <p>Is <em>your</em> project in a stall?  Give us a call!</p>
            </div>
        );
    }

}

export default Services