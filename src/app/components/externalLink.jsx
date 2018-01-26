import React from 'react'
import Proptypes from 'prop-types'
import Icon from './icon'

class ExternalLink extends React.Component{

    render(){
        return(
            <a href={this.props.url} className={this.props.className} rel="nofollow">
                {(this.props.children) 
                    ? <span>{this.props.children}</span>
                    : <span className="nowrap">{this.props.text} <Icon icon="fa-external-link" /></span> 
                }
            </a>
        )
    }

}

ExternalLink.propTypes = {
    url: Proptypes.string.isRequired,
    className: Proptypes.string,
    children: Proptypes.object,
    text: Proptypes.string
}

export default ExternalLink