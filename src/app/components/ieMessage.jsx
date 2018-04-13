import React from 'react'

class IEMessage extends React.Component {
	
	render(){
		if (navigator.appVersion.search(/Trident/gi) > -1) {
			return(
				<div>
					<h1>Hi, Internet Explorer user!</h1>
					<p>We&rsquo;re sorry, but our site uses some new(ish) snazzy
					layout techniques and IE just doesn&rsquo;t work with them
					any more.</p>
					<p>In fact, Microsoft don&rsquo;t support IE any more and 
					recommend using Edge instead. Any other modern
					browser is also fine: FireFox, Chrome, Safari.</p>
					<p>You can certainly browse our site, but it won&rsquo;t
					look great. IE just doesn&rsquo;t have a big enough market
					share any more for us to write backward-compatible
					code for it.</p>
					<p>We hope you understand :)</p>
				</div>)
		}

		return (<span />)
	}
}

export default IEMessage