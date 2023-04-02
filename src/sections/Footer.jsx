import {links} from './links';

import {AiOutlineInstagram} from 'react-icons/ai';
import {AiOutlineLinkedin} from 'react-icons/ai';
import {AiOutlineGithub} from 'react-icons/ai';

export const Footer = () => {
  return (
    <>
        <footer>
          <div className="container footer-container">
          <ul className='nav-menu'>
          {
            links.map(item => <li key={item.id}><a href={item.link}>{item.title}</a></li>)
          }        
        </ul>
          </div>
          <div className="footer-socials">
          <a href='https://instagram.com/jeancadames' target='_blank' rel="noopener noreferrer"><AiOutlineInstagram/></a>
          <a href='https://www.linkedin.com/in/jean-adames-96918b176/' target='_blank' rel="noopener noreferrer"><AiOutlineLinkedin/></a>
          <a href='https://github.com/jeancadames' target='_blank' rel="noopener noreferrer"><AiOutlineGithub/></a>
        </div>
        <small>2023 Jean Adames© Todos los derechos reservados</small>
        </footer>
    </>
  )
}
