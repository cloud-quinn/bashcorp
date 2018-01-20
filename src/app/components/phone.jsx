import React from 'react'

class Phone extends React.Component{

  render(){
      return(
        <div className={this.props.className}>
            <p><i className="fa fa-mobile"></i>&nbsp;
              <a href="tel:+441233659866" className="phone" itemProp="telephone">01233 659 866</a>
              <span className="sr-only" itemProp="url">http://www.bashcorp.co.uk</span>
            </p>
        </div>
      )
  }

}

export default Phone