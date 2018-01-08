import React from 'react'

class Footer extends React.Component {

	render() {
		return(
			<div className={this.props.className}>
				<hr />
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

export default Footer