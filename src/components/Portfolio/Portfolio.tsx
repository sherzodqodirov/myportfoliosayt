import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import intalim from '../../assets/intalim.png'
import bianchi from '../../assets/bianchi.png'
import tian from '../../assets/tian.png'
import infotian from '../../assets/info-tian.png'
import process from '../../assets/process.png'
import reseption from '../../assets/reseption.png'
import shop from '../../assets/shop.png'

export function Portfolio() {
  return (
    <Container id="portfolio">
      <h2>My portfolio</h2>

      <div className="projects">

        <ScrollAnimation animateIn="flipInX">
          <a target='_blank' href='https://intalim.uz/'>
            <div className="project">
              <div className="body">
                <img src={intalim} style={{width:"100%", borderRadius:"8px"}} alt="" />
                <h3>InTalim</h3>
                <p>This system is a driving school system. This platform is a great convenience for school administration and for school students. I was involved in the preparation of the front end part of this platform</p>
              </div>
              <footer>
              <ul className="tech-list">
                  <li>Html</li>
                  <li>Css</li>
                  <li>Sass</li>
                  <li>Bootstrap</li>
                  <li>Antd design</li>
                </ul>
                <ul className="tech-list">
                  <li>JavaScript</li>
                  <li>React js</li>
                  <li>Redux</li>
                </ul>
              </footer>
            </div>
          </a>
        </ScrollAnimation>

        {/* <ScrollAnimation animateIn="flipInX">
          <a target='_blank' href='https://clinic.proacademy.uz/'>
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://clinic.proacademy.uz/" target="_blank" rel="noreferrer">
                  <img src={externalLinkIcon} alt="Visitar site" />
                </a>
              </div>
            </header>
            <div className="body">
              <a style={{ color: "#fff" }} href="https://clinic.proacademy.uz/" target="_blank" rel="noreferrer">
                <h3>Legal Clinic</h3>
              </a>
              <p>This system allows people to get legal advice for free and online. I was involved in the preparation of the front end part of this site.</p>
            </div>
            <footer>
            <ul className="tech-list">
                <li>Html</li>
                <li>Css</li>
                <li>Sass</li>
                <li>Bootstrap</li>
                <li>Antd design</li>
              </ul>
              <ul className="tech-list">
                <li>JavaScript</li>
                <li>React js</li>
                <li>Redux</li>
              </ul>
            </footer>
          </div>
          </a>
        </ScrollAnimation> */}

        <ScrollAnimation animateIn="flipInX">
          <a target='_blank' href='https://tian.uz/'>
          <div className="project">
            <div className="body">
              <img src={tian} style={{width:"100%", borderRadius:"8px"}} alt="" />
                <h3>Tian</h3>
              <p>This site helps to find a house, apartment, office. I was involved in the frontend of this site</p>
            </div>
            <footer>
            <ul className="tech-list">
                <li>Html</li>
                <li>Css</li>
                <li>Bootstrap</li>
              </ul>
              <ul className="tech-list">
                <li>JavaScript</li>
                <li>React js</li>
              </ul>
            </footer>
          </div>
          </a>
        </ScrollAnimation>
        
        <ScrollAnimation animateIn="flipInX">
          <a target='_blank' href='https://info.tian.uz'>
          <div className="project">
            <div className="body">
              <img src={infotian} style={{width:"100%", borderRadius:"8px"}} alt="" />
                <h3>Info tian uz</h3>
              <p>This site helps to find a house, apartment, office. I was involved in the frontend of this site</p>
            </div>
            <footer>
            <ul className="tech-list">
                <li>Html</li>
                <li>Css</li>
                <li>Sass</li>
                <li>Bootstrap</li>
              </ul>
              <ul className="tech-list">
                <li>JavaScript</li>
              </ul>
            </footer>
          </div>
          </a>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <a target='_blank' href='https://theprocess.uz/'>
          <div className="project">
            <div className="body">
              <img src={process} style={{width:"100%", borderRadius:"8px"}} alt="" />
                <h3>Process uz</h3>
              <p>Process LLC is a worldwide operating trading company in nuts, pulses and dried fruit and a supplier to many well known buyers.</p>
            </div>
            <footer>
            <ul className="tech-list">
                <li>Html</li>
                <li>Css</li>
                <li>Sass</li>
                <li>Bootstrap</li>
              </ul>
              <ul className="tech-list">
                <li>JavaScript</li>
                <li>React js</li>
              </ul>
            </footer>
          </div>
          </a>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <a target='_blank' href='https://bianchiwater.uz'>
          <div className="project">
            <div className="body">
                <img src={bianchi} style={{width:"100%", borderRadius:"8px"}} alt="" />
                <h3>Bianchi water</h3>
              <p>This site is for a water filter installation company.</p>
            </div>
            <footer>
            <ul className="tech-list">
                <li>Html</li>
                <li>Css</li>
                <li>Sass</li>
                <li>Bootstrap</li>
              </ul>
              <ul className="tech-list">
                <li>JavaScript</li>
                <li>JQuery</li>
              </ul>
            </footer>
          </div>
          </a>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <a target='_blank' href='http://reception.tsul.uz/login'>
          <div className="project">
            <div className="body">
            <img src={reseption} style={{width:"100%", borderRadius:"8px"}} alt="" />
                <h3>Reseption TSUL</h3>
              <p>This system is designed for the reception of the Tashkent State University of Law . I was involved in the preparation of the front of this site.</p>
            </div>
            <footer>
            <ul className="tech-list">
                <li>Html</li>
                <li>Css</li>
                <li>Sass</li>
                <li>Bootstrap</li>
                <li>Antd design</li>
              </ul>
              <ul className="tech-list">
                <li>JavaScript</li>
                <li>React js</li>
                <li>Redux</li>
              </ul>
            </footer>
          </div>
          </a>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <a target='_blank' href='https://online-shop-next-silk.vercel.app/'>
          <div className="project">
            <div className="body">
            <img src={shop} style={{width:"100%", borderRadius:"8px"}} alt="" />
                <h3>Online Shop</h3>
              <p>I created this site for my portfolio.</p>
            </div>
            <footer>
            <ul className="tech-list">
                <li>Html</li>
                <li>Css</li>
                <li>Sass</li>
                <li>Bootstrap</li>
                <li>Antd design</li>
              </ul>
              <ul className="tech-list">
                <li>JavaScript</li>
                <li>Next js</li>
                <li>Redux</li>
              </ul>
            </footer>
          </div>
          </a>
        </ScrollAnimation>

      </div>
    </Container>
  );
}