import React from 'react'

class Footer extends React.Component {

  render() {
      return(
        <div className={this.props.className}>
			<p>
				&copy; BashCorp Ltd. { (new Date()).getFullYear() }
			</p>
			<p>
				<span itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
				 <span itemProp="streetAddress">International House
				 776 - 778 Barking Road</span>,
				 <span itemProp="addressLocality">London</span>,
				 <span itemProp="postalCode">E13 9PJ</span>.
				 <span itemProp="addressCountry" className="sr-only">UK</span>
				</span>
			</p>
		</div>
      )
  }

}

export default Footer