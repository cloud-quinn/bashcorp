import React from 'react'
import Carousel from './carousel'
import home from '../styles/home.less'

class Home extends React.Component{

  render(){
    return(
      <div className="home-component">
        <Carousel />
        <div className="columns">
          <div className="column1">
            <h2>Who are we?</h2>
            <p>BashCorp is a duo of skilled software contractors- we're ready to take on a role in larger teams, deliver individual projects or for consultancy.</p>
          </div>
          <div className="column2">
            <h2>What do we do?</h2>
          </div>
        </div>
       </div>
    )
  }

}

export default Home