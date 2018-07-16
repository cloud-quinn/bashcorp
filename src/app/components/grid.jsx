import React from 'react'
import Proptypes from 'prop-types'

class Grid extends React.Component{

    render(){
        return (
            <div className={this.props.className}>
              <div className="banner-bar"></div>
              <div className="page-background"></div>
              <div className="page-margin"></div>
              {this.props.children}
            </div>
        )
    }
}

Grid.propTypes = {
    className: Proptypes.string,
    children: Proptypes.array
}

export default Grid