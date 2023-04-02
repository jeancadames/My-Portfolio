import aboutImg from '../assets/about.jpg'
import CV from '../assets/CV Jean Adames (1).pdf'
import {HiDownload} from 'react-icons/hi'


import {FaAward} from 'react-icons/fa'
import {AiFillTool} from 'react-icons/ai'
import {TbBooks} from 'react-icons/tb'

export const About = () => {
  return (
    <>
      <section id="about">
        <div className="container about-container">
          <div className="about-left">
            <div className="about-potrait">
              <img src={aboutImg} alt="" />
            </div>
          </div>
          <div className="about-right">
            <h2>Sobre mi</h2>
            <div className="about-cards">
              <article className="card about-card">
                <span className='about-card-icon'><FaAward/></span>
                <h5>Experiencia</h5>
                <small>2+ años de experiencia</small>
              </article>
              <article className="card about-card">
                <span className='about-card-icon'><TbBooks/></span>
                <h5>Proyectos personales</h5>
                <small>10</small>
              </article>
              <article className="card about-card">
                <span className='about-card-icon'><AiFillTool/></span>
                <h5>Herramientas</h5>
                <small>15</small>
              </article>
            
            
              {/* <Card className="about-card" >
                <span></span>
                <h5></h5>
                <small></small>
              </Card> */}
            </div>
              <p>
                Licenciado en Mercadeo y Negocios Electrónicos, con conocimiento y enfoque en el desarrollo web y análisis de comercios electrónicos. Cuento con mas de 2 años de experiencia en el área web, desde desarrollo de sitios webs como e-commerces o landing pages, hasta el análisis de data que viene de estas plataformas, utilizando Google Analytics y Power BI. Me enfoco en el desarrollo front-end con herramientas como HTML, CSS, JavaScript, React, Tailwind, Bootstrap, ReactRouterDom y demás.
              </p>
              <p>
                Soy Jean Adames, y mi pasión se basa en una entrega eficiente de mis servicios digitales. Mi prioridad es entregar tu proyecto con un alto estandar y una alta calidad en el tiempo acordado. Contáctame si quieres llevar a cabo tus proyectos de una manera eficiente y con un resultado creativo y funcional. Puedes revisar mi curriculum aquí abajo.
              </p>
              <a href={CV} download className='btn primary' >Descargar CV <HiDownload/> </a>
          </div>
        </div>
      </section>
    </>
  )
}
