import React from "react"
import './portfolio.css'
import image1 from '../../assets/family.jpg'
import image2 from '../../assets/bugufi.jpg'
import image3 from '../../assets/e-commerce.jpg'
import image4 from '../../assets/employee.jpg'

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>My Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={image1} alt="" />
          </div>
          <h3>Here Is Family Insurance Project</h3>
          <div className="portfolio__item-script">
          <a href="https://github.com/emmytumwine/family-insurance" className="btn btn-primary" target="_blank" rel="noreferrer">Github</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={image2} alt="" />
          </div>
          <h3>This Is Bugufi MIS Project</h3>
          <div className="portfolio__item-script">
          <a href="https://github.com/emmytumwine/my-project" className="btn btn-primary" target="_blank" rel="noreferrer">Github</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={image3} alt="" />
          </div>
          <h3>This Is E-commerce Commodity Project</h3>
          <div className="portfolio__item-script">
          <a href="https://github.com/emmytumwine/commodity" className="btn btn-primary" target="_blank" rel="noreferrer">Github</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={image4} alt="" />
          </div>
          <h3>This Is Employee Protection Project</h3>
          <div className="portfolio__item-script">
          <a href="https://github.com/emmytumwine/employee-protection" className="btn btn-primary" target="_blank" rel="noreferrer">Github</a>
          </div>
        </article>

      </div>
    </section>
  )
}

export default Portfolio