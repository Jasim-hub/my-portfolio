import React from 'react'
import './protfolio.css';
import image from "./image.jpg";
import image3 from "./website-img-2.webp";
import image4 from "./website-img-4.jpg"
const Protfolio = () => {
  return (
    <div className="pro">
      <header className="header">
      
        <a href='#home'className="logo">Jasim <span>R</span></a>
        <box-icon name='menu'id="menu-icon"></box-icon >
        <nav className="navbar">
          <a href="#home"className="active">Home</a>
          <a href="#education">Education</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <a href="https://drive.google.com/file/d/1SPhckVhrGi3DYkwgMIycF0aT5kWAp5Sf/view?usp=drive_link" className="btn">Resume</a>
        </nav>
      </header>
      <section className="home"id="home">
        <div className="home-content">
          <h1>Hi, It's<span> Jasim</span></h1>
          <h3 className="text-animation">I'm a <span></span></h3>
          <p>I am a passionate and detail-oriented
             web developer with a strong foundation 
             in front-end and back-end technologies. 
             With a focus on creating user-friendly, 
             responsive, and dynamic websites, 
             I specialize in HTML, CSS, JavaScript, and modern frameworks
              like React. I also have experience working with 
              databases like MySQL and MongoDB and back-end like python and frameworks
               like djnago</p>
               <div className="social-icons">
                <a href="www.linkedin.com/in/jasim-r-52009b30a"><box-icon name='linkedin' type='logo' ></box-icon></a>
                <a href="https://www.instagram.com/_ja__sim___?igsh=MWx2MTc1YWZ0dHhnNA=="><box-icon type='logo' name='instagram'></box-icon></a>
                <a href="https://www.instagram.com/_ja__sim___?igsh=MWx2MTc1YWZ0dHhnNA=="><box-icon type='logo' name='instagram'></box-icon></a>
               </div>
               <div className="btn-group">
                <span className="btn">Hire</span>
                <a href="#contact" className="btn">Contact</a>
               </div>

        </div>
        <div className="home-img">
          <img src={image}alt=""/>

        </div>
      </section>
    <div className="education" id="education">
      <h2 className="heading">Education</h2>
      <div className="timeline-items">
        <div className="timeline-item">
          <div className="timeline-dot"></div>
            <div className="timeline-date">
              2021
            </div>
            <div className="timeline-content">
              <h3>High School</h3>
              <p>
                Govt HSS Neduveli, Trivandrum<br/>
                Commerce with Computer Application
              </p>
            </div>
          
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"> </div>
            <div className="timeline-date">
              2024
            </div>
            <div className="timeline-content">
              <h3>Kerala university</h3>
              <p>
                UIT Pirappancode, Trivandrum<br/>
                B.Com with Computer Application
              </p>
            </div>
         
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
            <div className="timeline-date">
              2024
            </div>
            <div className="timeline-content">
              <h3>Internship</h3>
              <p>
                Kompentenzen Technologies,Trivandrum<br/>
                Python Full Stack Developer Intern
              </p>
            </div>
          
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"> </div>
            <div className="timeline-date">
              2025
            </div>
            <div className="timeline-content">
              <h3>Job Experience</h3>
              <p>
                EXATECH<br/>
                Epub &#x0026; XML Developer
                 </p>
            </div>
         
        </div>



      </div>
      </div>
      <section className="service"id="services">
        <h2 className="heading">Services</h2>
        <div className="service-container">
          <div className="service-box">
            <div className="service-info">
              <h4>UI Design</h4>
              <p>UI/UX focuses on designing user-friendly, visually appealing, and easy-to-use digital interfaces that improve user experience and interaction.
              </p>
            </div>
          </div>

          <div className="service-box">
            <div className="service-info">
              <h4>Frontend Development</h4>
              <p>UI/UX focuses on designing user-friendly, visually appealing, and easy-to-use digital interfaces that improve user experience and interaction.
              </p>
            </div>
          </div>

          <div className="service-box">
            <div className="service-info">
              <h4>Backend Development</h4>
              <p>Backend Developer focused on building server-side logic, APIs, databases, and application functionality.
              </p>
            </div>
          </div>

          <div className="service-box">
            <div className="service-info">
              <h4>React Develpoment </h4>
              <p>React Developer skilled in building modern, responsive, and dynamic web applications using React.js.
              </p>
            </div>
          </div>
        </div>
        </section> 
        <section className="projects" id = "projects">
        <h2 className="heading">Projects</h2>
          <div className="projects-box">
            
            <div className="project-card">
              <img src={image3}alt="jhc"/>
                <h3>project 1</h3>
                <p>djhuygfevhjdvgjd hjdyudgdhj csd jhbJgybcf
                  jasim byvffybdhjg gyusvvudjhg hJGygdfvgvc 
                  kjHIUhfc  JHGUYgfv jhGYUguygd jkIUHb BjhgDYUD 
                  JBuhujHBB nVFtnB jhuygucb juygdjc

                </p>
                <div className="btn">Review Project</div>
                </div>

                <div className="project-card">
              <img src={image3}alt="jhc"/>
                <h3>project 2</h3>
                <p>djhuygfevhjdvgjd hjdyudgdhj csd jhbJgybcf
                  jasim byvffybdhjg gyusvvudjhg hJGygdfvgvc 
                  kjHIUhfc  JHGUYgfv jhGYUguygd jkIUHb BjhgDYUD 
                  JBuhujHBB nVFtnB jhuygucb juygdjc

                </p>
                <div className="btn">Review Project</div>

                </div>

                <div className="project-card">
              <img src={image4}alt="jhc"/>
                <h3>project 3</h3>
                <p>djhuygfevhjdvgjd hjdyudgdhj csd jhbJgybcf
                  jasim byvffybdhjg gyusvvudjhg hJGygdfvgvc 
                  kjHIUhfc  JHGUYgfv jhGYUguygd jkIUHb BjhgDYUD 
                  JBuhujHBB nVFtnB jhuygucb juygdjc

                </p>
                <div className="btn">Review Project</div>

                </div> 
            
          </div>


        </section>
        <section className="contact"id="contact">
        <h2 className="heading">Contact <span>Me</span></h2>
        <form>
          <div className="input-group">
            <div className="input-box">
              <input type="text"
              placeholder="Full Name"/>
              <input type="email"
              placeholder="Email"/>
            </div>
            <div className="input-box">
              <input type="number"
              placeholder="Phone number"/>
              <input type="text" placeholder="subject" />

            </div>
          </div>
          <div className="input-group-2">
            <textarea cols="30"
            rows="10"placeholder="your massage"/>
            <input type="submit"className="btn" value="Send Message"/>
          </div>
        </form>
        </section>
        <footer className="footer">
          <div className="social">
          <a href="www.linkedin.com/in/jasim-r-52009b30a"><box-icon name='linkedin' type='logo' ></box-icon></a>
                <a href="https://www.instagram.com/_ja__sim___?igsh=MWx2MTc1YWZ0dHhnNA=="><box-icon type='logo' name='instagram'></box-icon></a>
                 <a href="https://www.instagram.com/_ja__sim___?igsh=MWx2MTc1YWZ0dHhnNA=="><box-icon type='logo' name='instagram'></box-icon></a>
          </div>
          <ul className="list">
            <li>
              <a href="#menu-icon">FAQ</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#education">About Me</a>
            </li>
            <li>
              <a href="#menu-icon">Contact Me</a>
            </li>
            <li>
              <a href="projects">Projects</a>
            </li>
          </ul>
        </footer>

    </div>
  )
}

export default Protfolio