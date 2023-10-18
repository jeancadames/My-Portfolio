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
            <h2>About me</h2>
            <div className="about-cards">
              <article className="card about-card">
                <span className='about-card-icon'><FaAward/></span>
                <h5>Experience</h5>
                <small>2+ years of experience</small>
              </article>
              <article className="card about-card">
                <span className='about-card-icon'><TbBooks/></span>
                <h5>Projects</h5>
                <small>10</small>
              </article>
              <article className="card about-card">
                <span className='about-card-icon'><AiFillTool/></span>
                <h5>Tools</h5>
                <small>15</small>
              </article>
            
            
              {/* <Card className="about-card" >
                <span></span>
                <h5></h5>
                <small></small>
              </Card> */}
            </div>
              <p>
              Bachelor of Marketing and Electronic Business, with knowledge and focus on web development data analysis. I have more than 2 years of experience in the web area, from the development of websites such as e-commerces or landing pages, to the analysis of data that comes from these platforms, using Google Analytics, Power BI, Google Tag Manager and Looker Studio. I focus on front-end development with tools like HTML, CSS, JavaScript, React, Tailwind, Bootstrap, ReactRouterDom, and more.
              </p>
              <p>
              While my academic background is in marketing, my career trajectory has led me to a deep immersion in the field of technology. Through a combination of professional experience and self-directed learning, I have developed a comprehensive understanding of front-end development. My journey has been marked by a commitment to continuous growth, achieved through hands-on projects, relevant courses, and complex challenges. This unique blend of marketing knowledge and technical expertise provides me with a well-rounded perspective that bridges the gap between the technological and business realms.
              </p>
              <a href={CV} download className='btn primary' >Download Resume <HiDownload/> </a>
          </div>
        </div>
      </section>
    </>
  )
}
