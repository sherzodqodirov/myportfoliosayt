import { BrowserRouter } from "react-router-dom"
import { Container } from "./styles"
import ScrollAnimation from "react-animate-on-scroll"
import Illustration from "../../assets/illustration.svg"
import { NavHashLink } from "react-router-hash-link"
export function Hero(){
  return(
    <Container id="home">
      <div className="hero-text">
        <ScrollAnimation animateIn="fadeInUp">
          <p>Hi 👋</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={100}>
          <h1 style={{fontSize:"50px"}}>Sherzod Qodirov</h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={120}>
          <h3>Front end developer</h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={130}>
          <p className="small-resume">I am a web development technician using JavaScript</p>
        </ScrollAnimation>

          <ScrollAnimation animateIn="fadeInUp" delay={150}>
            <BrowserRouter>
              <NavHashLink smooth to="#contact" className="button">Contact</NavHashLink>
            </BrowserRouter>
          </ScrollAnimation>
      </div>
      <div className="hero-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0}>
          <img src={Illustration} alt="Ilustração"/>
        </ScrollAnimation>
      </div>
    </Container>
  )
}