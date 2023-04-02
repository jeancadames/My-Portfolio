import headerImage from '../assets/header.jpg';

import {AiOutlineInstagram} from 'react-icons/ai';
import {AiOutlineLinkedin} from 'react-icons/ai';
import {AiOutlineGithub} from 'react-icons/ai';

export const Header = () => {
  return (
    <header id="header">
      <div className="container header-container">
        <div className="header-profile">
          <img src={headerImage} alt="header portait" />
        </div>
        <h3>Jean Adames</h3>
        <p>Acabas de conocer a quien trabajará de la mano contigo para llevar a cabo tus proyectos webs. Dime lo que quieres y te entregaré un proyecto moderno, funcional, responsive para todos los dispositivos, con la mejor tecnología para mayor eficiencia </p>
        <div className="header-cta">
          <a href="#contact" className='btn primary'>Hablemos</a>
          <a href="#portfolio" className='btn light'>Mis trabajos</a>
        </div>
        <div className="header-socials">
          <a href='https:instagram.com/jeancadames' target='_blank' rel="noopener noreferrer"><AiOutlineInstagram/></a>
          <a href='https://www.linkedin.com/in/jean-adames-96918b176/' target='_blank' rel="noopener noreferrer"><AiOutlineLinkedin/></a>
          <a href='https://github.com/jeancadames' target='_blank' rel="noopener noreferrer"><AiOutlineGithub/></a>
        </div>
      </div>
    </header>
  )
}
