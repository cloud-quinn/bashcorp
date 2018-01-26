import React from 'react'
import Icon from './icon'
import Proptypes from 'prop-types'

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

IconButton.propTypes = {
  icon: Proptypes.string.isRequired,
  label: Proptypes.string.isRequired
}

export default IconButton