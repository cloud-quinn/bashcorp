import React from 'react'
import Icon from './icon'

class IconButton extends React.Component {

  render(){
      return(
        <span>
            <Icon icon={this.props.icon} />&nbsp;
            <span className="tiny-label">{this.props.label}</span>
        </span>
      )
  }

}

export default IconButton