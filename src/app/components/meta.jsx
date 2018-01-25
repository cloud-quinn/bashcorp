import React from 'react'

import favicon96x96 from '../../assets/favicon-96x96.png'
import favicon32x32 from '../../assets/favicon-32x32.png'
import favicon16x16 from '../../assets/favicon-16x16.png'
import favicon128 from '../../assets/favicon-128.png'
import mstile144x144 from '../../assets/mstile-144x144.png'
import mstile70x70 from '../../assets/mstile-70x70.png'
import mstile150x150 from '../../assets/mstile-150x150.png' 
import mstile310x150 from '../../assets/mstile-310x150.png' 
import mstile310x310 from '../../assets/mstile-310x310.png'

class Meta extends React.Component {

	createElement(type, obj){
		let elem = document.createElement(type)
		Object.keys(obj).forEach(function(key) {
			elem[key] = obj[key]
		})

		return elem
	}

	insertHeader(elem){
		document.head.appendChild(elem)
	}

	render(){

		let metas = [
			{name: 'msapplication-TileColor', content: '#ffffff'},
			{name: 'msapplication-TileImage', content: mstile144x144},
			{name: 'msapplication-square70x70logo', content: mstile70x70},
			{name: 'msapplication-square150x150logo', content: mstile150x150},
			{name: 'msapplication-wide310x150logo', content: mstile310x150},
			{name: 'msapplication-square310x310logo', content: mstile310x310}
		]
		let links = [
			{rel: 'icon', type: 'image/png', href: favicon96x96, sizes: '96x96'},
			{rel: 'icon', type: 'image/png', href: favicon32x32, sizes: '32x32'},
			{rel: 'icon', type: 'image/png', href: favicon16x16, sizes: '16x16'},
			{rel: 'icon', type: 'image/png', href: favicon128, sizes: '128x128'}
		]

		metas.forEach(m => this.insertHeader(this.createElement('meta', m)))
		links.forEach(l => this.insertHeader(this.createElement('link', l)))

		return (<span />)
	}

}

export default Meta