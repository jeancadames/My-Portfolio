import ghostPepper from '../assets/ghost pepper.png'
import journalApp from '../assets/journalapp.png'
import ecommerce from '../assets/trendx.png'
import rentalX from '../assets/rentalx.png'
import movie from '../assets/movie-ui-layout.png'
import markgency from '../assets/margency.png'

export const Portfolio = () => {
  return (
    <>
        <section id="portfolio">
          <div className="container portfolio-container">
            <h2>Recent Projects</h2>
            <p>Look and try my recent projects that I have worked on over time, you can try the Live Demo as well as see the source code of it</p>
            <div className="projects">
              <div className="card-project project">
                 <img src={markgency} className='project-img' alt="project layout" /> 
                 <h5>Markgency Landing Page</h5>
                 <small>Markgency is a Digital Marketing Agency Landing Page. It is a fully responsive landing page for all types of devices, it has different sections and striking designs. Sections include a contact form, video section, blog, news, etc.</small>
                 <div className="btn-section">
                  <a target='_blank' href='https://jeancadames.github.io/Markgency-Landing-Page/' className='btn primary'>Live Demo</a>
                  <a target='_blank' href='https://github.com/jeancadames/Markgency-Landing-Page' className='btn light'>Code</a>
                 </div>
              </div>
              <div className="card-project project">
              <img src={journalApp} className='project-img' alt="project layout" /> 
                 <h5>Journal App</h5>
                 <small>Journal App is an application made with React connected to the Firebase database, allows authentication with Google accounts, and allows the user to save notes along with images that they can access whenever they want.</small>
                 <div className="btn-section">
                  <a target='_blank' href='https://journal-app-demo.netlify.app/' className='btn primary'>Live Demo</a>
                  <a target='_blank'href='https://github.com/jeancadames/JournalApp' className='btn light'>Code</a>
                 </div>
              </div>
              <div className="card-project project">
                <img src={ecommerce} className='project-img' alt="project layout" /> 
                 <h5>TrendX E-Commerce</h5>
                 <small>TrendX is a clothing e-commerce created in HTML, CSS React. This project, apart from having a great UI design, has a fully responsive design and advanced elements such as an image slider for the home page banner, multi menu, multiple pages for all products, a product pagination and so on.</small>
                 <div className="btn-section">
                  <a target='_blank' href='https://trend-x.netlify.app/' className='btn primary'>Live Demo</a>
                  <a target='_blank' href='https://github.com/jeancadames/trend-X' className='btn light'>Code</a>
                 </div>
              </div>
              <div className="card-project project">
                <img src={movie} className='project-img' alt="project layout" />
                 <h5>Movie UI Layout</h5>
                 <small>A simple project but at the same time with a great UI design, it was made with HTML, CSS and JavaScript technology. This project was created from scratch where I worked with the implementation of APIs and their consumption.</small>
                 <div className="btn-section">
                  <a target='_blank' href='https://movie-layour-ui.netlify.app/' className='btn primary'>Live Demo</a>
                  <a target='_blank' href='https://github.com/jeancadames/50-Projects/tree/main/Movies%20UI%20Layout' className='btn light'>Code</a>
                 </div>
              </div>
              <div className="card-project project">
                <img src={ghostPepper} className='project-img' alt="project layout" /> 
                 <h5>Ghost Pepper Restaurant</h5>
                 <small>Ghost Pepper is a completely responsive website, it was developed from scratch with HTML, CSS and JavaScript, and then made more efficient with React for the reuse of components and better loading of them. This website has its own landing page, and different sections such as about us, reservations, menu and a blog.</small>
                 <div className="btn-section">
                  <a target='_blank' href='https://ghost-pepper-restaurant.netlify.app/' className='btn primary'>Live Demo</a>
                  <a target='_blank' href='https://github.com/jeancadames/Ghost-Pepper' className='btn light'>Code</a>
                 </div>
              </div>
              <div className="card-project project">
                <img src={rentalX} className='project-img' alt="project layout" /> 
                 <h5>Rental X</h5>
                 <small>RentalX is a website for vehicle rental, this project has a fully responsive design while being multipage, where the vehicle data comes from an API. This project was carried out with React technology for the reuse of components, while also having advanced components such as carousels and product filters</small>
                 <div className="btn-section">
                  <a target='_blank' href='https://rentalx.netlify.app/' className='btn primary'>Live Demo</a>
                  <a target='_blank' href='https://github.com/jeancadames/Rental-x' className='btn light'>Code</a>
                 </div>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}
