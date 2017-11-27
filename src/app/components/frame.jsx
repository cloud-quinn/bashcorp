import React from 'react'

class Frame extends React.Component {

  render() {
      return(
            <div className={this.props.className}>
              {this.props.children}
            </div>
      )}
}

export default Frame