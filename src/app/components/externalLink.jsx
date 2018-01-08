import React from 'react'
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

export default ExternalLink