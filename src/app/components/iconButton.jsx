import React from 'react'

class IconButton extends React.Component {

  render(){
      return(
        <span>
            <i className={ `fa ${this.props.icon}` }></i>&nbsp;
            <span className="tiny-label">{this.props.label}</span>
        </span>
      )
  }

}

export default IconButton