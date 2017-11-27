import React from 'react'

class Logo extends React.Component{

  render(){

    return(
      <div className={this.props.className}>
          <h1 className="sr-only"><span itemProp="name">BashCorp Ltd.</span> Professional IT Services</h1>
          <img itemProp="image" src="img/favicon-96x96.png" alt="" className="sr-only" />
      </div>
    )

  }

}

export default Logo