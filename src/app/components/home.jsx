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
            <h2>Who we are</h2>
            <p>BashCorp is a duo of skilled software contractors- we're ready to take on a role in larger teams, deliver individual projects or for consultancy.</p>
            <p>We've a proven track record in enterprise, web-oriented software and we're ready to help you.</p>
          </div>
          <div className="column2">
            <h2>What we do</h2>
            <p>Between us we have 14 years experience delivering software projects, with our focus on:</p>
            <ul>
             <li>Microsoft ASP.Net MVC/WebForms</li>
             <li>Sitecore</li>
             <li>React+Redux</li>
             <li>Node</li>
             <li>Angular</li>
            </ul>
          </div>
          <div className="column1">
            <h2>Our portfolio</h2>
            <p>We've worked with some great teams and organisations, including:</p>
            <ul>
              <li>The BBC</li>
              <li>E.on Energy UK</li>
              <li>The Chartered Institute of Public Finances and Accounts</li>
              <li>Canterbury Christ Church University</li>
              <li>The Cricket Society</li>
              <li>Totally Money</li>
            </ul>
           
          </div>
        </div>
       </div>
    )
  }

}

export default Home