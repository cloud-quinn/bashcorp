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


import CHome from '../containers/home'
import Footer from './components/footer'
import Frame from './components/frame'
import Grid from './components/grid'

const store = createStore(bashCorp)

ReactDOM.render(
  <Provider store={store}>
    <Grid>
      <Frame>
        <Router>
          <Route path="/" component={CHome} />
        </Router>
      </Frame>
      <Footer className="last-row center-column center-text small pad" />
    </Grid>
  </Provider>, document.getElementById('root')
)