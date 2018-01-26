import React from 'react'
import Proptypes from 'prop-types'

class TopNavigation extends React.Component{

  render(){

    return(
      <div className={this.props.className}>
        {this.props.children}
      </div>
    )

  }

}

TopNavigation.propTypes = {
  className: Proptypes.string,
  children: Proptypes.object
}

export default TopNavigation