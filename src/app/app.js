import fileNotFound from './static/404.html'
import server from '../server.js'
import appStyles from './styles/appStyles'
import index from '../index.html'
import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import bashCorp from '../reducers'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import Home from './components/home'
import Footer from './components/footer'
import Frame from './components/frame'
import Grid from './components/grid'
import TopNavigation from './components/topNavigation'
import Logo from './components/logo'
import Phone from './components/phone'

const store = createStore(bashCorp)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Grid className="grid">
        <Logo className="logo" />
        <Phone className="phoneNumber" />
        <TopNavigation className="site-navigation">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">Services</Link></li>
            <li><Link to="/">Portfolio</Link></li>
            <li><Link to="/">Contact</Link></li>
          </ul>
        </TopNavigation>
        <Frame className="frame">
          <Route path="/" component={Home} />
        </Frame>
        <Footer className="footer" />
      </Grid>
    </Router>
  </Provider>, document.getElementById('root')
)