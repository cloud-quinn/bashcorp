import React from 'react'
import Proptypes from 'prop-types'
import ExternalLink from './externalLink'

class Footer extends React.Component {

	render() {
		return(
			<div className={this.props.className}>
				<h3>Privacy</h3> 
				<p>We need to use analytics to see how many visits we get, which pages are popular and where in the world our visitors come from.  It also lets us know when errors on our site happen.</p>
				Doing this involves using a <ExternalLink url="https://en.wikipedia.org/wiki/HTTP_cookie" text="cookie" /> which is placed in your web browser&rsquo;s temporary files. These analytics are provided by <ExternalLink url="https://analytics.google.com" text="Google Analytics" />.
				We cannot identify visitors individually based on these analytics.
				<p><strong>Our site does not require this cookie to work, however, and you can <ExternalLink url="https://www.wikihow.com/Disable-Cookies" text="disable the cookie using these instructions" />.</strong></p>
				<hr />
				<p>
					<span className="bold">&copy; BashCorp Ltd. { (new Date()).getFullYear() }</span>
					<br />
					Registered company 10727538
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