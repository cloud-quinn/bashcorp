import React from 'react'
import {
    render
} from 'react-dom'
import index from 'file-loader?name=index.html!./index.html'
import heading from './components/heading'

// Stylesheets
require('./styles/app.scss');

render( 
	<div>
	<h1>Home</h1>
		<p>heading:</p>
		<heading />
	<a href="#">Home</a>
	</div>,
    document.getElementById('content')
)