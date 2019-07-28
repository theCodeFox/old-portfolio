import React, { Component } from 'react';
import { navigate } from '@reach/router';

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
          <img
            className="slide-button-image"
            src={require(`../images/prev-${theme}.png`)}
            alt="previous slide"
          />
        </p>
        <div className="slide" onClick={() => {
          navigate(`/projects/${projects[counter].name.toLowerCase()}`, { state: { msg: 'project requested' } })
        }}>
          <img
            className="slide-image"
            src={require(`../images/${projects[counter].name}.png`)}
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
        <img
          className="slide-button-image"
          src={require(`../images/next-${theme}.png`)}
          alt="next slide"
        />
      </p>
    </div>
    <p className="indicators">
    {projects.map((project, i) => {
      return <img
        src={require(`../images/cloud-${theme}.png`)}
        alt=""
        key={`slide-${i}`}
        className={counter === i ? "active-slide" : "inactive-slide"}
        onClick={() => {
        clearTimeout(autoSlide)
        this.selectSlide(i)
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