import React from 'react'
import carouselstyles from '../styles/carousel.less'

import cipfa from '../assets/carousel/CIPFA.png'
import bbc from '../assets/carousel/bbcTaster.png'
import cccu from '../assets/carousel/cccuPortal.png'
import cricketSoc from '../assets/carousel/cricket-society.png'
import eon from '../assets/carousel/eonHeat.png'

class Carousel extends React.Component{

  constructor(){
    super()
    this.slides = [
      {'index': 0, 'img': bbc, 'url': 'http://www.bbc.co.uk/taster', caption: 'As independent contractors, we were part of the BBC Taster team- delivering updates and new features to BBC Taster'},
      {'index': 1, 'img': eon, 'url': 'http://heat.eonenergy.com', caption: 'We worked with E.On to release their community energy Heat site in Sitecore 8.2/C♯ .Net'},
      {'index': 2, 'img': cipfa, 'url': 'http://www.cipfa.org', caption: 'We collaborate with CIPFA on a number of projects, including their new Employer Portal via MyCIPFA'},
      {'index': 3, 'img': cccu, 'url': 'http://www.canterbury.ac.uk', caption: 'We\'ve delivered new student services for Canterbury Christ Church University, in Kent, in .Net and Angular'},
      {'index': 4, 'img': cricketSoc, 'url': 'http://www.cricketsociety.org', caption: 'We built a new Umbraco/C♯ .Net for the British Cricket Society'}
    ]

    this.currentSlide = this.slides[0]
    this.handleClick = this.handleClick.bind(this)
    this.handleNext = this.handleNext.bind(this);
    this.handlePrevious = this.handlePrevious.bind(this);
    this.moveCarousel = this.moveCarousel.bind(this);
  }

  handleClick(){
    window.location.href = this.currentSlide.url;
  }

  moveCarousel(mutator, def){
    let nextSlide = this.currentSlide ? mutator(this.currentSlide.index) : 0;
    if (nextSlide >= this.slides.length || nextSlide < 0){
      nextSlide = def;
    }
    
    this.currentSlide = this.slides[nextSlide]
    this.setState({currentSlide: nextSlide})
  }

  handleNext(){
    this.moveCarousel(n => n + 1, 0);
  }

  handlePrevious(){
    this.moveCarousel(n => n - 1, this.slides.length -1)
  }

  render(){

    return(
      <div className="carousel">
      
        <div className="right-column button-row">
          <button onClick={this.handleNext}>
            <i className="fa fa-chevron-right fa-2x" aria-hidden="true"></i>
            <span className="sr-only">Next slide</span>
          </button>
        </div>

        <div className="left-column button-row">
          <button onClick={this.handlePrevious}>
            <i className="fa fa-chevron-left fa-2x" aria-hidden="true"></i>
            <span className="sr-only">Previous slide</span>
          </button>
        </div>

        <div className="background">
        </div>
        <div className="slide" style={{backgroundImage: 'url(' + this.currentSlide.img + ')'}} onClick={this.handleClick}>

        </div>
        <div className="caption">
          {this.currentSlide.caption}
        </div>
      </div>
    )

  }

}

export default Carousel