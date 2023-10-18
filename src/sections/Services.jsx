import {CgWebsite} from 'react-icons/cg';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {AiFillSetting} from 'react-icons/ai';
import {SiGoogleanalytics} from 'react-icons/si';

export const Services = () => {
  return (
    <>
        <section id="services">
          <div className="container services-container">
            <h2>My Services</h2>
            <p>I give you the best in:</p>
            <div className="services-cards-container">
              <article className="card services-cards">
                <span className='service-card-icon'><CgWebsite/></span>
                <div className="services-info">
                  <h5>Landing Pages</h5>
                  <small>I can recreate pure code designs and layouts, as well as design from scratch for your landing page or your own fully functional website</small>
                </div>
              </article>
              <article className="card services-cards">
                <span className='service-card-icon'><AiOutlineShoppingCart/></span>
                <div className="service-info">
                  <h5>E-Commerce</h5>
                  <small>I help you in the structuring, design and functionality of your own e-commerce, where you can sell your items and show the world what you can offer.</small>
                </div>
              </article>
              <article className="card services-cards">
                <span className='service-card-icon'><AiFillSetting/></span>
                <div className="service-info">
                  <h5>Website maintenance and optimization</h5>
                  <small>I offer code maintenance and optimization services and web elements for landing pages or websites that you already have. I help you improve what you have with the best technology</small>
                </div>
              </article>
              <article className="card services-cards">
                <span className='service-card-icon'><SiGoogleanalytics/></span>
                <div className="service-info">
                  <h5>Web data analytics</h5>
                  <small>Know your customer segment and their behavior when entering your domains. I help you understand the traffic, the behavior of your clients and users, I optimize your reports and I configure your tools to have a tracking of important events within your site.</small>
                </div>
              </article>
            </div>
          </div>
        </section>
    </>
  )
}
