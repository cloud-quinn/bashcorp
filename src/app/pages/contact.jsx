import React from 'react'
import Hero from '../components/hero'
import Icon from '../components/icon'
import home from '../styles/home.less'
import ExternalLink from '../components/externalLink'
let ServicesHero = '/BashCorpImgRoot/Tokyo.jpg'

class Contact extends React.Component{

    render(){
        document.title = 'Contact BashCorp Ltd.'

        return(
            <div className="home-component">
                <Hero url={ServicesHero} height={'200px'}>
                    <h2>Contact Us</h2>
                </Hero>
                <div className="columns">
                    <div className="column1">
                        <h3>Social Media</h3>
                        <dl>
                            <dt>
                                <ExternalLink url="https://uk.linkedin.com/company/bashcorp">
                                    <Icon icon="fa-linkedin" />
                                </ExternalLink>
                            </dt>
                            <dd>
                                <p>
                                    Get company updates, blog posts and semi-regular instalments of our
                                    webcomic <em>Waterfall</em>!
                                </p>
                                <p>
                                    <ExternalLink url="https://uk.linkedin.com/company/bashcorp" text="uk.linkedin.com/company/bashcorp" />
                                </p>
                            </dd>
                            <dt>
                                <ExternalLink url="https://twitter.com/bashcorpit">
                                    <Icon icon="fa-twitter" />
                                </ExternalLink>
                            </dt>
                            <dd>
                                <p>Tweet us on Twitter and we'll twee twhat twe can twoo for too.</p>
                                <p>
                                    <ExternalLink url="https://twitter.com/bashcorpit" text="twitter.com/bashcorpit" />
                                </p>
                            </dd>
                        </dl>
                    </div>

                    <div className="column2">
                        <h3>Phone, Email &amp; Post</h3>
                        <dl itemScope itemType="http://schema.org/Company">
                            <dt class="sr-only">
                                <span itemProp="name">BashCorp Ltd.</span>
                            </dt>
                            <dt>Phone</dt>
                            <dd>
                                <span itemProp="telephone">0123 456 789</span>
                            </dd>
                            <dt>Canonical URL</dt>
                            <dd>
                                <span itemProp="url">http://www.bashcorp.co.uk</span>
                            </dd>
                            <dt>Email</dt>
                            <dd>
                                <ExternalLink url="http://www.google.com/recaptcha/mailhide/d?k=0137iZven5gKjWt8ICs4Kuew==&c=nqcJnhgcphNS11mBUlSEZqOQAeLoF64N6mCCRLYoYes=" 
                                text="Reveal email" />
                            </dd>
                            <dt>Company address</dt>
                            <dd>
                                <span itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
                                    <span itemProp="streetAddress">International House<br />
                                    776 - 778 Barking Road</span>,<br />
                                    <span itemProp="addressLocality">London</span>,<br />
                                    <span itemProp="postalCode">E13 9PJ</span>.<br />
                                    <span itemProp="addressCountry">UK</span>
                                </span>
                            </dd>
                        </dl>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact