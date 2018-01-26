import React from 'react'
import Proptypes from 'prop-types'
import favicon from '../../assets/favicon-96x96.png'

class Logo extends React.Component{

  render(){

    return(
      <div className={this.props.className}>
          <h1 className="sr-only"><span itemProp="name">BashCorp Ltd.</span> Professional IT Services</h1>
          <img itemProp="image" src={favicon} alt="" className="sr-only" />
      </div>
    )

  }

}

Logo.propTypes = {
  className: Proptypes.string
}

export default Logo