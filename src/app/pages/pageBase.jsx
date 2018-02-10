import React from 'react'

class PageBase extends React.Component {

    constructor(props, title, canonical){
        super(props)

        this.title = title
        this.canonical = canonical
        this.base = 'http://www.bashcorp.co.uk'
    }

    componentWillMount(){
        document.title = this.title
        let canonical = Array.from(document.head.getElementsByTagName('link')).find(l => l.rel === 'canonical')
        canonical.href = `${this.base}/${this.canonical}`
    }
}

export default PageBase