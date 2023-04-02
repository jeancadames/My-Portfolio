import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai';
import {BiBriefcase} from 'react-icons/bi'
import {SiWindows11} from 'react-icons/si'
import {BsFillChatDotsFill} from 'react-icons/bs'

export const FloatingNav = () => {
  return (
  <>
    <div id="floating-nav">
        <div className="floating-nav-container">
          <a href='#'><AiOutlineHome/></a>
          <a href='#about'><AiOutlineUser/></a>
          <a href='#services'><BiBriefcase/></a>
          <a href='#portfolio'><SiWindows11/></a>
          <a href='#contact'><BsFillChatDotsFill/></a>
        </div>
    </div>
  </>
    )
}
