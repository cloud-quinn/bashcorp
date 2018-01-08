import React from 'react'

class NotFound extends React.Component{

    render(){
        document.title = 'Page Not Found'
        console.warn(`Yeah, it's a ⚠️404 status sent over a 200 connection, which semantically bites.

Problem is, it's a clientside single-page app... so how do you send a correct 404 status when
the user is already on your site?  Any answers on a postcard, please! 🤔`)

        return(
            <div>
                <h1>404: Page Not Found</h1>
                <p>Sorry about the broken link 😖 our analytics should flag this up and then we'll try and fix it!</p>
                <p>Until then... would you like to go to our <a href="/">Home</a> page instead?</p>
            </div>
        )
    }
}

export default NotFound