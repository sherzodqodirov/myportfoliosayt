import { Container } from "./styles";
import githubIcon from "../../assets/github-icon.svg"
import externalLinkIcon from "../../assets/external-link-icon.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Portfolio() {
  return (
    <Container id="portfolio">
      <h2>My portfolio</h2>

      <div className="projects">

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://intalim.uz/" target="_blank" rel="noreferrer">
                  <img src={externalLinkIcon} alt="Visitar site" />
                </a>
              </div>
            </header>
            <div className="body">
              <a style={{ color: "#fff" }} href="https://intalim.uz/" target="_blank" rel="noreferrer">
                <h3>InTalim</h3>
              </a>
              <p>This system is a driving school system. This platform is a great convenience for school administration and for school students. I was involved in the preparation of the front end part of this platform</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>JavaScript</li>
                <li>React js</li>
                <li>Redux</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
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
                <li>JavaScript</li>
                <li>React js</li>
                <li>Redux</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="http://reception.tsul.uz/login" target="_blank" rel="noreferrer">
                  <img src={externalLinkIcon} alt="Visitar site" />
                </a>
              </div>
            </header>
            <div className="body">
              <a style={{ color: "#fff" }} href="http://reception.tsul.uz/login" target="_blank" rel="noreferrer">
                <h3>Reseption TSUL</h3>
              </a>
              <p>This system is designed for the reception of the Tashkent State University of Law . I was involved in the preparation of the front of this site.</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>JavaScript</li>
                <li>React js</li>
                <li>Redux</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://github.com/ahrorbeksulaymanov/online-shop" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visitar site" />
                </a>
                <a href="https://online-shop-next-silk.vercel.app/" target="_blank" rel="noreferrer">
                  <img src={externalLinkIcon} alt="Visitar site" />
                </a>
              </div>
            </header>
            <div className="body">
              <a style={{ color: "#fff" }} href="https://online-shop-next-silk.vercel.app/" target="_blank" rel="noreferrer">
                <h3>Online Shop</h3>
              </a>
              <p>I created this site for my portfolio.</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>JavaScript</li>
                <li>Next js</li>
                <li>Redux</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://github.com/ahrorbeksulaymanov/weather-app" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visitar site" />
                </a>
                <a href="https://ahrorbeksulaymanov.github.io/weather-app/" target="_blank" rel="noreferrer">
                  <img src={externalLinkIcon} alt="Visitar site" />
                </a>
              </div>
            </header>
            <div className="body">
              <a style={{ color: "#fff" }} href="https://ahrorbeksulaymanov.github.io/weather-app/" target="_blank" rel="noreferrer">
                <h3>Weathet app</h3>
              </a>
              <p>I created this site for my portfolio. You can see the real weather through this app</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>JavaScript</li>
                <li>TypeScript</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}