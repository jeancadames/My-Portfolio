import Logo from '../assets/logo.jpg'
import { links } from './links'

export const Navbar = () => {
  return (
    <nav>
      <div className="container nav-container">
        <a href="index.html" className='nav-logo'>
          <img src={Logo} alt="logo" />
        </a>
        <ul className='nav-menu'>
          {
            links.map(item => <li key={item.id}><a href={item.link}>{item.title}</a></li>)
          }        
        </ul>
      </div>
    </nav>
  )
}
