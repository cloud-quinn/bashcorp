import React from 'react'

class Grid extends React.Component{

    render(){
        return (
            <div className="grid">
              <div className="span-all-rows span-all-columns full-height background-view"></div>
              <div className="span-all-rows center-column full-height blurred-view"></div>
              <div className="header span-all-columns banner"></div>
              <div className="header-padding span-all-columns banner thin"></div>
              <div className="header-padding center-column glass-view thin logo"></div>
              <div className="skip-first-row center-column full-height glass-view"></div>
              <div className="top-padding center-column glass-view thin"></div>
              <div className="top-margin span-all-columns thin"></div>
              <div className="header center-column logo thick">
                  <h1 className="sr-only"><span itemProp="name">BashCorp Ltd.</span> Professional IT Services</h1>
                  <img itemProp="image" src="img/favicon-96x96.png" alt="" className="sr-only" />
              </div>
              <div className="header center-column thick middle">
                  <div className="subgrid">
                      <div className="right-column">
                          <span className="phone" itemProp="telephone">0123 456 789</span>
                          <span className="sr-only" itemProp="url">http://www.bashcorp.co.uk"</span>
                      </div> 
                  </div>
              </div>
            {this.props.children}
          </div>
        )
    }
}

export default Grid