import React, { Component } from 'react';
import Values from './Values';
import ProjectList from './ProjectList';
import Carousel from './Carousel';

class Projects extends Component {
  state = {
    pocketGP: true,
    hiveNews: true,
    portfolio: true,
  }

  render() {
  const { pocketGP, hiveNews, portfolio } = this.state;
  return <div>

    <Carousel />

    <div className="aboutMe-values">
      <Values />
    </div>

    <ProjectList
      pocketGP={pocketGP}
      hiveNews={hiveNews}
      portfolio={portfolio}
      toggleHoverPocketGP={this.toggleHoverPocketGP}
      toggleHoverHiveNews={this.toggleHoverHiveNews}
      toggleHoverPortfolio={this.toggleHoverPortfolio}
    />

  </div>
  }

  toggleHoverPocketGP = () => {
    const { pocketGP } = this.state;
    if(pocketGP) this.setState({ pocketGP: false })
    else this.setState({ pocketGP: true })
  }
  toggleHoverHiveNews = () => {
    const { hiveNews } = this.state;
    if(hiveNews) this.setState({ hiveNews: false })
    else this.setState({ hiveNews: true })
  }
  toggleHoverPortfolio = () => {
    const { portfolio } = this.state;
    if(portfolio) this.setState({ portfolio: false })
    else this.setState({ portfolio: true })
  }
}

export default Projects;