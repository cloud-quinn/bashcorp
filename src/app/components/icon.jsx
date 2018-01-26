import React from 'react'
import Proptypes from 'prop-types'

class Icon extends React.Component {

  render(){
      return(
        <i className={ `fa ${this.props.icon}` } aria-hidden="true"></i>
      )
  }

}

Icon.propTypes = {
  icon: Proptypes.string.isRequired
}

export default Icon