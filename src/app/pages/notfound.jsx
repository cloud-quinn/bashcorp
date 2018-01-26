import React from 'react'

class NotFound extends React.Component{

    render(){
        document.title = 'Page Not Found'
        return(
            <div>
                <h1>404: Page Not Found</h1>
                <p>Sorry about the broken link 😖 our analytics should flag this up and then we&lsquo;ll try and fix it!</p>
                <p>Until then... would you like to go to our <a href="/">Home</a> page instead?</p>
            </div>
        )
    }
}

export default NotFound