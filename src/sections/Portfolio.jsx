import pathSoft from '../assets/pathsoft.png'
import journalApp from '../assets/journalapp.png'
import ecommerce from '../assets/ecommerce.png'
import heroSPA from '../assets/herospa.png'
import movie from '../assets/movie-ui-layout.png'
import markgency from '../assets/margency.png'

export const Portfolio = () => {
  return (
    <>
        <section id="portfolio">
          <div className="container portfolio-container">
            <h2>Proyectos Recientes</h2>
            <p>Mira y prueba mis proyectos recientes en los que he trabajado a lo largo del tiempo, puedes probar el Live Demo como tambien ver el código fuente del mismo</p>
            <div className="projects">
              <div className="card-project project">
                 <img src={markgency} className='project-img' alt="project layout" /> 
                 <h5>Markengcy Landing Page</h5>
                 <small>Markgency es un Landing Page de agencia de marketing digital. Es un landing page totalmente responsive para todo tipo de dispositivos, cuenta con diferentes secciones y diseños llamativos. Entre las secciones están incluidas un formulario para contactar, apartado con video, blog, noticias, etc.</small>
                 <div className="btn-section">
                  <a target='_blank' href='https://jeancadames.github.io/Markgency-Landing-Page/' className='btn primary'>Live Demo</a>
                  <a target='_blank' href='https://github.com/jeancadames/Markgency-Landing-Page' className='btn light'>Code</a>
                 </div>
              </div>
              <div className="card-project project">
              <img src={journalApp} className='project-img' alt="project layout" /> 
                 <h5>Journal App</h5>
                 <small>Journal App es una aplicación realizada con React conectada a la base de datos Firebase, permite una autenticación con cuentas de Google, y le permite al usuario poder guardar notas junto a imagenes a las que puede acceder cuando quiera.</small>
                 <div className="btn-section">
                  <a target='_blank' href='https://journal-app-demo.netlify.app/' className='btn primary'>Live Demo</a>
                  <a target='_blank'href='https://github.com/jeancadames/JournalApp' className='btn light'>Code</a>
                 </div>
              </div>
              <div className="card-project project">
                <img src={ecommerce} className='project-img' alt="project layout" /> 
                 <h5>Sport Shop E-Commerce</h5>
                 <small>El siguiente proyecto es un E-Commerce con todas sus funcionalidades necesarias, el mismo viene integrado con un backoffice en el que el administrador del negocio puede crear nuevos productos sin ayuda de terceros, lo cual ofrece un mayor control sobre su negocio y reduciendo la dependencia de desarrolladores externos.</small>
                 <div className="btn-section">
                  <a target='_blank' href='https://e-commerce-six-amber.vercel.app/' className='btn primary'>Live Demo</a>
                  <a target='_blank' href='https://github.com/jeancadames/e-commerce' className='btn light'>Code</a>
                 </div>
              </div>
              <div className="card-project project">
                <img src={movie} className='project-img' alt="project layout" />
                 <h5>Movie UI Layout</h5>
                 <small>Este proyecto es un website con consumo de API que muestra en pantalla de inicio las películas más recientes del momento, el mismo tiene la funcionalidad con una barra de búsqueda para el usuario filtrar o buscar películas de interes. Este diseño UI contiene sinópsis de la película al colocar el mouse sobre la portada, y la puntuación que ha tenido en el ambito popular.</small>
                 <div className="btn-section">
                  <a target='_blank' href='https://movie-layour-ui.netlify.app/' className='btn primary'>Live Demo</a>
                  <a target='_blank' href='https://github.com/jeancadames/50-Projects/tree/main/Movies%20UI%20Layout' className='btn light'>Code</a>
                 </div>
              </div>
              <div className="card-project project">
                <img src={pathSoft} className='project-img' alt="project layout" /> 
                 <h5>Pathsoft Landing Page</h5>
                 <small>Pathsoft es un landing page informativo totalmente responsive diseñado con la tecnología básica del desarrollo web. Es una recreación total y mejorada de un simple diseño, demostrando la capacidad para llevar a cabo lo que sueñas a la web.</small>
                 <div className="btn-section">
                  <a target='_blank' href='https://jeancadames.github.io/Pathsoft-Landing-Page/' className='btn primary'>Live Demo</a>
                  <a target='_blank' href='https://github.com/jeancadames/Pathsoft-Landing-Page' className='btn light'>Code</a>
                 </div>
              </div>
              <div className="card-project project">
                <img src={heroSPA} className='project-img' alt="project layout" /> 
                 <h5>Heros Page</h5>
                 <small>Heros Page es una página informativa que muestra de manera filtrada una base de datos de heroes de las industrias de comics mas famosas: Marvel y DC. La misma cuenta con un buscador propio totalmente funcional y diseños y animaciones varias.</small>
                 <div className="btn-section">
                  <a target='_blank' href='https://celebrated-speculoos-e45e16.netlify.app  ' className='btn primary'>Live Demo</a>
                  <a target='_blank' href='https://github.com/jeancadames/HerosPageApp' className='btn light'>Code</a>
                 </div>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}
