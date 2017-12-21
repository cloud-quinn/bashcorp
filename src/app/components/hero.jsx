import React from 'react'
import HeroStyles from '../styles/hero.less'

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

export default Hero;