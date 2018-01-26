import React from 'react'
import Proptypes from 'prop-types'

class Frame extends React.Component {

  render() {
      return(
            <div className={this.props.className}>
              {this.props.children}
            </div>
      )}
}

Frame.propTypes = {
  className: Proptypes.string,
  children: Proptypes.array
}

export default Frame