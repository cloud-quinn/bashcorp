import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import bashCorp from '../reducers'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom'
import dependencies from './dependencies'
import components from './styles/components.less'

import Home from './components/home'
import Footer from './components/footer'
import Frame from './components/frame'
import Grid from './components/grid'
import TopNavigation from './components/topNavigation'
import Logo from './components/logo'
import Phone from './components/phone'
import IconButton from './components/iconButton'

const store = createStore(bashCorp)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Grid className="grid">
        <Logo className="logo" />
        <Phone className="phoneNumber" />
        <TopNavigation className="site-navigation">
          <ul>
            <li>
                <NavLink activeClassName="selected" to="/">
                    <IconButton icon="fa-home" label="Home" />
                </NavLink>
            </li>
            <li>
                <NavLink activeClassName="selected" to="/services">
                    <IconButton icon="fa-handshake-o" label="Services" />
                </NavLink>
            </li>
            <li>
                <NavLink activeClassName="selected" to="/portfolio">
                    <IconButton icon="fa-picture-o" label="Portfolio" />
                </NavLink>
            </li>
            <li>
                <NavLink activeClassName="selected" to="/contact">
                    <IconButton icon="fa-envelope-o" label="Contact" />
                </NavLink>
            </li>
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