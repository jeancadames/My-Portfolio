import {AiOutlineMail} from 'react-icons/ai'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'


export const Contact = () => {
  return (
    <>
      <section id="contact">
        <div className="container contact-container">
          <h2>Contact me</h2>
          <p>Send me a message by any of your preference</p>
          <div className="contacts">
            <a href="https://ig.me/m/jeancadames" target="_blank" className="contact-icon"><AiOutlineInstagram/></a>
            <a href='mailto:jeancadames22@gmail.com' className="contact-icon"><AiOutlineMail/></a>
            <a href="https://wa.me/18298155305" target="_blank" className="contact-icon"><AiOutlineWhatsApp/></a>
          </div>
        </div>
      </section>
    </>
  )
}
