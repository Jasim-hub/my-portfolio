import React from 'react'
import './protfolio.css';
import boxicons from 'boxicons';
import image from "./image.jpg";
import image2 from "./project 1.jpg";
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
          <a href="#" className="btn">Resume</a>
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
                <a href="#"><box-icon name='linkedin' type='logo' ></box-icon></a>
                <a href="#"><box-icon type='logo' name='instagram'></box-icon></a>
                <a href="#"><box-icon type='logo' name='twitter'></box-icon></a>
                <a href="#"><box-icon type='logo' name='instagram'></box-icon></a>
               </div>
               <div className="btn-group">
                <a href="#" className="btn">Hire</a>
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
                jkdgjbjhvytsdvhgvgfccghvnsbvdhfcn vbsxcvhg
                snhjgchvn bc fsdchdsd bcfcsdvnvsdhgbds
                ,snjbdcbn bszdvgvgdvnvhgbmndsbhvghvhnvnz
                nz gvghdsvgv dznvhgvzn
              </p>
            </div>
          
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"> </div>
            <div className="timeline-date">
              2022
            </div>
            <div className="timeline-content">
              <h3>university</h3>
              <p>
                jkdgjbjhvytsdvhgvgfccghvnsbvdhfcn vbsxcvhg
                snhjgchvn bc fsdchdsd bcfcsdvnvsdhgbds
                ,snjbdcbn bszdvgvgdvnvhgbmndsbhvghvhnvnz
                nz gvghdsvgv dznvhgvzn
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
                jkdgjbjhvytsdvhgvgfccghvnsbvdhfcn vbsxcvhg
                snhjgchvn bc fsdchdsd bcfcsdvnvsdhgbds
                ,snjbdcbn bszdvgvgdvnvhgbmndsbhvghvhnvnz
                nz gvghdsvgv dznvhgvzn
              </p>
            </div>
          
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"> </div>
            <div className="timeline-date">
              2025
            </div>
            <div className="timeline-content">
              <h3>job rec</h3>
              <p>
                jkdgjbjhvytsdvhgvgfccghvnsbvdhfcn vbsxcvhg
                snhjgchvn bc fsdchdsd bcfcsdvnvsdhgbds
                ,snjbdcbn bszdvgvgdvnvhgbmndsbhvghvhnvnz
                nz gvghdsvgv dznvhgvzn
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
              <h4>Ui design</h4>
              <p>jhgdyugfvghcvdtyvcdvvdghvccuakgdwvevb gfcatcaj
                nvHFytvewh chfg jca bv jhamvamjytfanb vb acchavna bv
                nvcyuguuhjshgyuadbhjvka jbuygd  yweVGHTCVHA AHVTYUFJWE  
                jaeinbjbuy amenbyyucvhg byugcvgdc jhjvdcghvd gyvvgh jh
              </p>
            </div>
          </div>

          <div className="service-box">
            <div className="service-info">
              <h4>Frontend Development</h4>
              <p>jhgdyugfvghcvdtyvcdvvdghvccuakgdwvevb gfcatcaj
                nvHFytvewh chfg jca bv jhamvamjytfanb vb acchavna bv
                nvcyuguuhjshgyuadbhjvka jbuygd  yweVGHTCVHA AHVTYUFJWE  
                jaeinbjbuy amenbyyucvhg byugcvgdc jhjvdcghvd gyvvgh jh
              </p>
            </div>
          </div>

          <div className="service-box">
            <div className="service-info">
              <h4>Backend Development</h4>
              <p>jhgdyugfvghcvdtyvcdvvdghvccuakgdwvevb gfcatcaj
                nvHFytvewh chfg jca bv jhamvamjytfanb vb acchavna bv
                nvcyuguuhjshgyuadbhjvka jbuygd  yweVGHTCVHA AHVTYUFJWE  
                jaeinbjbuy amenbyyucvhg byugcvgdc jhjvdcghvd gyvvgh jh
              </p>
            </div>
          </div>

          <div className="service-box">
            <div className="service-info">
              <h4>React Develpoment </h4>
              <p>jhgdyugfvghcvdtyvcdvvdghvccuakgdwvevb gfcatcaj
                nvHFytvewh chfg jca bv jhamvamjytfanb vb acchavna bv
                nvcyuguuhjshgyuadbhjvka jbuygd  yweVGHTCVHA AHVTYUFJWE  
                jaeinbjbuy amenbyyucvhg byugcvgdc jhjvdcghvd gyvvgh jh
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
          <a href="#"><box-icon name='linkedin' type='logo' ></box-icon></a>
                <a href="#"><box-icon type='logo' name='instagram'></box-icon></a>
                <a href="#"><box-icon type='logo' name='twitter'></box-icon></a>
                <a href="#"><box-icon type='logo' name='instagram'></box-icon></a>
          </div>
          <ul className="list">
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">About Me</a>
            </li>
            <li>
              <a href="#">Contact Me</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
          </ul>
        </footer>

    </div>
  )
}

export default Protfolio