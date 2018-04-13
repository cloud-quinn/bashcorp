import React from 'react'

class PageBase extends React.Component {

    constructor(props, title, canonical){
        super(props)

        this.title = title
        this.canonical = canonical
        this.base = 'https://bashcorp.co.uk'
    }

    componentWillMount(){
        document.title = this.title
        let append = false
        let c = Array.from(document.head.getElementsByTagName('link')).find(l => l.rel === 'canonical')
        if (!c) {
         c = document.createElement('link')
         append = true;
        }

        c.rel = 'canonical';
        c.href = `${this.base}/${this.canonical}`
        if (append) 
           document.head.appendChild(c);
  
    }
}

export default PageBase
