import React from 'react'
import Proptypes from 'prop-types'
import ExternalLink from './externalLink'

class Footer extends React.Component {

	render() {
		return(
			<div className={this.props.className}>
				<hr />
				<p><strong>Privacy</strong>: we use analytics to see how many visits we get, and this involves using a <ExternalLink url="https://en.wikipedia.org/wiki/HTTP_cookie" text="cookie" />.  That said, our site doesn&rsquo;t 
				need this to run properly so you&rsquo;re <ExternalLink url="https://www.wikihow.com/Disable-Cookies" text="welcome to disable it" />.</p>
				<p>
					<span className="bold">&copy; BashCorp Ltd. { (new Date()).getFullYear() }</span>
					<br />
					<span itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
					<span itemProp="streetAddress">International House&nbsp;
					776 - 778 Barking Road</span>,&nbsp;
					<span itemProp="addressLocality">London</span>,&nbsp;
					<span itemProp="postalCode">E13 9PJ</span>.&nbsp;
					<span itemProp="addressCountry" className="sr-only">UK</span>
					</span>
				</p>
			</div>
		)
	}

}

Footer.propTypes = {
	className: Proptypes.string
}

export default Footer