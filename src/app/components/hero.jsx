import React from 'react'
import Proptypes from 'prop-types'
import '../styles/hero.less'

class Hero extends React.Component {

    render(){
        return(
            <div className="heroUnit" 
                 style={{backgroundImage: 'url(' + this.props.url + ')', height: this.props.height || '100px'}}>
                 <div className="heroOverlay">
                    {this.props.children}
                 </div>
            </div>
        )
    }
}

Hero.propTypes = {
    url: Proptypes.string.isRequired,
    height: Proptypes.string.isRequired,
    children: Proptypes.object
}

export default Hero;