import React from 'react'
import PageBase from './PageBase'
import Carousel from '../components/carousel'
import '../styles/home.less'

class Home extends PageBase{

    constructor(props) {
        super(props, 'BashCorp Ltd. Professional IT Solutions', '')
    }

  render(){
    return(
      <div className="home-component">
        <Carousel />
        <div className="columns">
          <div className="column1">
            <h2>Who we are</h2>
            <p>BashCorp is a duo of skilled software developers- we&rsquo;re ready to take on a role in larger teams, deliver individual projects or for consultancy.</p>
            <p>We&rsquo;ve a proven track record in enterprise, web-oriented software and we&rsquo;re ready to help you.</p>
          </div>
          <div className="column2">
            <h2>What we do</h2>
            <p>Between us we have 14 years experience delivering software projects, with our focus on coding in:</p>
            <ul>
             <li>Microsoft ASP.Net MVC/WebForms</li>
             <li>Sitecore</li>
             <li>React+Redux</li>
             <li>ES6 JavaScript/Babel</li>
             <li>Node</li>
             <li>Angular</li>
            </ul>
          </div>
          <div className="column1">
            <h2>Our portfolio</h2>
            <p>We&rsquo;ve worked with some great teams and organisations, including:</p>
            <ul>
              <li>The BBC</li>
              <li>E.on Energy UK</li>
              <li>The Chartered Institute of Public Finances and Accounts</li>
              <li>Canterbury Christ Church University</li>
              <li>The Cricket Society</li>
            </ul>
          </div>
           <div className="column2">
            <h2>Where we&rsquo;re based</h2>
            <p>We&rsquo;re based in Nottingham, and can make it easily to Manchester, Leeds, Birmingham or London.</p>
            <p>Alternatively, we can work remotely and save you money on our rates (and lowering our carbon footprint <span className="green">♻︎</span>).</p>
            <p>
              <a href="/services#rates" className="button">Rates</a>
            </p>
          </div>
        </div>
       </div>
    )
  }

}

export default Home