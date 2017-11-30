import React from 'react'

class Phone extends React.Component{

  render(){
      return(
        <div className={this.props.className}>
            <p><i className="fa fa-mobile"></i>&nbsp;
              <span className="phone" itemProp="telephone">0123 456 789</span>
              <span className="sr-only" itemProp="url">http://www.bashcorp.co.uk"</span>
            </p>
        </div>
      )
  }

}

export default Phone