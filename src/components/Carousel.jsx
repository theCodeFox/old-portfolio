import React, { Component } from 'react';
import { navigate } from '@reach/router';

const slide1 = <div className="slide" onClick={() => {
  navigate('/projects/pocketgp', { state: { msg: 'project requested' } })
}}>
  <img
    className="slide-image"
    src={require("../images/pocketGP.png")}
    alt="pocket GP mobile app"
  />
  <p className="slide-content"><span className="highlight">PocketGP:</span> Cross platform mobile app supporting GPs and patients use their appointment times as efficiently as possible. Users can keep track of their ailments (including pictures and notes), with notifications and direct messaging between GP and patient.</p>
</div>;

const slide2 = <div className="slide" onClick={() => {
  navigate('/projects/hivenews', { state: { msg: 'project requested' } })
}}>
<img
  className="slide-image"
  src={require("../images/hiveNews.png")}
  alt="Hive News screenshot"
/>
<p className="slide-content"><span className="highlight">Hive News:</span> Allows user to create their own articles or read other users articles and comments. They can comment and vote on what they like or dislike and make changes to their articles or comments, including deleting what is no longer needed.</p>
</div>;

const slide3 = <div className="slide" onClick={() => {
  navigate('/projects/portfolio', { state: { msg: 'project requested' } })
}}>
<img
  className="slide-image"
  src={require("../images/portfolioScreenshot.png")}
  alt="portfolio screenshot"
/>
<p className="slide-content"><span className="highlight">Portfolio:</span> User can find out a little about me, Kay Vose (aka CodeFox), including what projects I have completed and how to contact me.</p>
</div>;

class Carousel extends Component {
  state = {
    slides: [slide1, slide2, slide3],
    counter: 0
  }

  // componentWillUnmount = () => {
  //   clearTimeout(autoSlide)
  // }

  render() {
    const { slides, counter } = this.state;
    const autoSlide = setTimeout(this.slider, 5000);
    return <div className="carousel-container">
      <span className="hidden">{autoSlide}</span>
      <div className="carousel">
        <p className="slide-button" onClick={() => {
          clearTimeout(autoSlide)
          this.prevSlide()
        }}>
          <img
            className="slide-button-image"
            src={require("../images/prev.png")}
            alt="previous slide"
          />
        </p>
      {slides[counter]}
      <p className="slide-button" onClick={() => {
        clearTimeout(autoSlide)
        this.nextSlide()
      }}>
        <img
          className="slide-button-image"
          src={require("../images/next.png")}
          alt="next slide"
        />
      </p>
    </div>
    <p className="indicators">
    {slides.map((slide, i) => {
      return <img src={require("../images/bee.png")} alt="bee" key={`slide${i}`} className={counter === i ? "active-slide" : "inactive-slide"} onClick={() => {
        clearTimeout(autoSlide)
        this.selectSlide(i)
      }} />
    })}
    </p>
    </div>
  }

  slider = () => {
    const { counter, slides } = this.state;
    counter === slides.length - 1
    ? this.setState(({ counter: 0 }))
    : this.setState(prevState => ({ counter: prevState.counter + 1 }))
  }
  nextSlide = () => {
    const { counter, slides } = this.state;
    counter === slides.length - 1
    ? this.setState(({ counter: 0 }))
    : this.setState(prevState => ({ counter: prevState.counter + 1 }))
  }
  prevSlide = () => {
    const { counter, slides } = this.state;
    counter === 0
    ? this.setState(({ counter: slides.length - 1 }))
    : this.setState(prevState => ({ counter: prevState.counter - 1 }))
  }
  selectSlide = (slide) => {
    this.setState(({ counter: slide }))
  }
}

export default Carousel;