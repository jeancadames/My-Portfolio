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
        <p>Passionate about new technologies and web design and development, my name is Jean Adams, a self-taught person in the technological area with knowledge in HTML, CSS, JavaScript, React and more</p>
        <div className="header-cta">
          <a href="#contact" className='btn primary'>Let's talk</a>
          <a href="#portfolio" className='btn light'>My works</a>
        </div>
        <div className="header-socials">
          <a href='https://instagram.com/jeancadames' target='_blank' rel="noopener noreferrer"><AiOutlineInstagram/></a>
          <a href='https://www.linkedin.com/in/jean-adames-96918b176/' target='_blank' rel="noopener noreferrer"><AiOutlineLinkedin/></a>
          <a href='https://github.com/jeancadames' target='_blank' rel="noopener noreferrer"><AiOutlineGithub/></a>
        </div>
      </div>
    </header>
  )
}
