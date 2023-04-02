import {CgWebsite} from 'react-icons/cg';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {AiFillSetting} from 'react-icons/ai';
import {SiGoogleanalytics} from 'react-icons/si';

export const Services = () => {
  return (
    <>
        <section id="services">
          <div className="container services-container">
            <h2>Mis servicios</h2>
            <p>Te doy lo mejor en lo siguiente:</p>
            <div className="services-cards-container">
              <article className="card services-cards">
                <span className='service-card-icon'><CgWebsite/></span>
                <div className="services-info">
                  <h5>Landing Pages</h5>
                  <small>Puedo recrearte diseños y maquetaciones a código puro, como también diseño desde 0 para tu landing page o tu propio website totalmente funcional</small>
                </div>
              </article>
              <article className="card services-cards">
                <span className='service-card-icon'><AiOutlineShoppingCart/></span>
                <div className="service-info">
                  <h5>E-Commerce</h5>
                  <small>Te ayudo en la estructuración, diseño y funcionalidad de tu propio e-commerce, donde podrás vender tus artículos y enseñar al mundo lo que puedes ofrecer.</small>
                </div>
              </article>
              <article className="card services-cards">
                <span className='service-card-icon'><AiFillSetting/></span>
                <div className="service-info">
                  <h5>Mantenimiento y optimización web</h5>
                  <small>Ofrezco servicios de mantenimiento y optimización de código y elementos webs para landing pages o sitios webs que ya tengas. Te ayudo a mejorar lo que tienes con la mejor tecnología</small>
                </div>
              </article>
              <article className="card services-cards">
                <span className='service-card-icon'><SiGoogleanalytics/></span>
                <div className="service-info">
                  <h5>Analítica de datos web</h5>
                  <small>Conoce tu segmento de clientes y el comportamiento de estos al entrar a tus dominios. Te ayudo a entender el tráfico, el comportamiento de tus clientes y usuarios, optimizo tus reportes y configuro tus herramientas para tener un tracking de eventos importante dentro de tu sitio.</small>
                </div>
              </article>
            </div>
          </div>
        </section>
    </>
  )
}
