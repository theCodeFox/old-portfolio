import React, { Component } from 'react';
import { navigate } from '@reach/router';

// image imports
import lightPrevIcon from '../images/prev-light.png';
import lightNextIcon from '../images/next-light.png';
import lightCloudIcon from '../images/cloud-light.png';
import darkPrevIcon from '../images/prev-dark.png';
import darkNextIcon from '../images/next-dark.png';
import darkCloudIcon from '../images/cloud-dark.png';

class Carousel extends Component {
  state = {
    counter: 0
  }

  render() {
    const { counter } = this.state;
    const { theme, projects } = this.props;
    const autoSlide = setTimeout(this.slider, 5000);
    return <div className={`carousel-container carousel-container-${theme}`}>
      <span className="hidden">{autoSlide}</span>
      <div className="carousel">
        <p className="slide-button" onClick={() => {
          clearTimeout(autoSlide)
          this.prevSlide()
        }}>
          <img className="slide-button-image" src={theme === "light" ? lightPrevIcon : darkPrevIcon} alt="previous slide" />
        </p>
        <div className="slide" onClick={() => {
          navigate(`/projects/${projects[counter].name.toLowerCase()}`, { state: { msg: 'project requested' } })
        }}>
          <img
            className="slide-image"
            src={projects[counter].image}
            alt={projects[counter].alt}
          />
          <p className="slide-content">
            <span className={`highlight highlight-${theme}`}>{projects[counter].title}</span>
            {projects[counter].description}
          </p>
        </div>
        <p className="slide-button" onClick={() => {
          clearTimeout(autoSlide)
          this.nextSlide()
        }}>
          <img className="slide-button-image" src={theme === "light" ? lightNextIcon : darkNextIcon} alt="next slide" />
      </p>
    </div>
    <p className="indicators">
    {projects.map((project, i) => {
      return <img
        src={theme === "light" ? lightCloudIcon : darkCloudIcon}
        alt=""
        key={`slide-${i}`}
        className={counter === i ? "active-slide" : "inactive-slide"}
        onClick={() => {
        if (counter !== i) {
          clearTimeout(autoSlide);
          this.selectSlide(i)
        }
        return;
      }} />
    })}
    </p>
    </div>
  }

  slider = () => {
    const { counter } = this.state;
    const { projects } = this.props;
    counter === projects.length - 1
    ? this.setState(({ counter: 0 }))
    : this.setState(prevState => ({ counter: prevState.counter + 1 }))
  }
  nextSlide = () => {
    const { counter } = this.state;
    const { projects } = this.props;
    counter === projects.length - 1
    ? this.setState(({ counter: 0 }))
    : this.setState(prevState => ({ counter: prevState.counter + 1 }))
  }
  prevSlide = () => {
    const { counter } = this.state;
    const { projects } = this.props;
    counter === 0
    ? this.setState(({ counter: projects.length - 1 }))
    : this.setState(prevState => ({ counter: prevState.counter - 1 }))
  }
  selectSlide = (slide) => {
    this.setState(({ counter: slide }))
  }
}

export default Carousel;