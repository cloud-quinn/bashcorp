import React from 'react'

class Frame extends React.Component {

  render() {
      return(
            <div className="skip-first-row center-column full-heigh pad">
              {this.props.children}
            </div>
      )}
}

export default Frame