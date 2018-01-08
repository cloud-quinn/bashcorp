import React from 'react'

class Icon extends React.Component {

  render(){
      return(
        <i className={ `fa ${this.props.icon}` } aria-hidden="true"></i>
      )
  }

}

export default Icon