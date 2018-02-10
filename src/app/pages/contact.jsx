import React from 'react'
import PageBase from './PageBase'
import Hero from '../components/hero'
import Icon from '../components/icon'
import '../styles/home.less'
import ExternalLink from '../components/externalLink'
import Phone from '../components/phone'
import ServicesHero from '../../assets/Granada.jpeg'

class Contact extends PageBase{

    constructor(props) {
        super(props, 'Contact BashCorp Ltd.', 'contact')
    }

    render(){
        return(
            <div className="home-component">
                <Hero url={ServicesHero} height={'200px'}>
                    <h1>Contact Us</h1>
                </Hero>
                <div className="columns">
                    <div className="column1">
                        <h2>Social Media</h2>
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
                                <p>Tweet us on Twitter and we&rsquo;ll see what we can do for you.</p>
                                <p>
                                    <ExternalLink url="https://twitter.com/bashcorpit" text="twitter.com/bashcorpit" />
                                </p>
                            </dd>
                        </dl>
                    </div>

                    <div className="column2">
                        <h2>Phone, Email &amp; Post</h2>
                        <dl itemScope itemType="http://schema.org/Company">
                            <dt className="sr-only">
                                <span itemProp="name">BashCorp Ltd.</span>
                            </dt>
                            <dt>Phone</dt>
                            <dd>
                                <Phone />
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