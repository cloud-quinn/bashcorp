import React from 'react'
import 'autotrack'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import bashCorp from '../reducers'
import {BrowserRouter as Router, Route, NavLink, Switch} from 'react-router-dom'
import './dependencies'
import './styles/components.less'
import './styles/ie.tertiary.css'
import Meta from './components/meta'

import Home from './pages/home'
import Services from './pages/services'
import Portfolio from './pages/portfolio'
import NotFound from './pages/notfound'
import Contact from './pages/contact'
import Footer from './components/footer'
import Frame from './components/frame'
import Grid from './components/grid'
import TopNavigation from './components/topNavigation'
import Logo from './components/logo'
import Phone from './components/phone'
import IconButton from './components/iconButton'

const store = createStore(bashCorp)

ga('create', 'UA-112543064-1', 'auto') // eslint-disable-line no-undef
ga('require', 'eventTracker') // eslint-disable-line no-undef
ga('require', 'outboundLinkTracker') // eslint-disable-line no-undef
ga('require', 'urlChangeTracker') // eslint-disable-line no-undef
ga('send', 'pageview') // eslint-disable-line no-undef

render(
  <Provider store={store}>
    <Router>
      <Grid className="grid">
        <Meta />
        <Logo className="logo" />
        <Phone className="phoneNumber" />
        <TopNavigation className="site-navigation">
          <ul>
            <li>
                <NavLink activeClassName="selected" className="button" exact to="/">
                    <IconButton icon="fa-home" label="Home" />
                </NavLink>
            </li>
            <li>
                <NavLink activeClassName="selected" className="button" to="/services">
                    <IconButton icon="fa-handshake-o" label="Services" />
                </NavLink>
            </li>
            <li>
                <NavLink activeClassName="selected" className="button" to="/portfolio">
                    <IconButton icon="fa-picture-o" label="Portfolio" />
                </NavLink>
            </li>
            <li>
                <NavLink activeClassName="selected" className="button" to="/contact">
                    <IconButton icon="fa-envelope-o" label="Contact" />
                </NavLink>
            </li>
          </ul>
        </TopNavigation>
        <Frame className="frame">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/services" component={Services} />
            <Route path="/contact" component={Contact} />
            <Route path="/portfolio" component={Portfolio} />
            <Route component={NotFound} />
          </Switch>
          <Footer className="footer" />
        </Frame>
      </Grid>
    </Router>
  </Provider>, document.getElementById('root')
)