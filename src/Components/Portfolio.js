import React, { Component } from "react";

class Portfolio extends Component {
  render() {
    if (this.props.data) {
      var projects = this.props.data.projects.map(function (projects) {
        var projectImage = "images/portfolio/" + projects.image;
        return (
          <div key={projects.title} className="columns portfolio-item">
            <div className="item-wrap">
              <a href={projects.url} title={projects.title}>
                <img alt={projects.title} src={projectImage} />
                <div className="portfolio-item-meta">
                  <h4>{projects.title}</h4>
                  {projects.tech.map(function (tech) {
                    return <li>{tech}</li>;
                  })}
                  <button type="button" class="btn btn-primary">
                    <a href={projects.source_code} style={{ color: "white" }}>
                      Source Code
                    </a>
                  </button>
                  <button type="button" class="btn btn-primary">
                    <a href={projects.demo} style={{ color: "white" }}>
                      Live Demo
                    </a>
                  </button>
                </div>
              </a>
            </div>
          </div>
        );
      });
    }

    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>

            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              {projects}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
