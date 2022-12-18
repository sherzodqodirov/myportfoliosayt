import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import portfolioImage from "../../assets/portfimg.jpg";


export function About() {
  return (
    <Container id="aboutme">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={100}>
          <p style={{marginBottom:"30px"}}>My name is Sherzod, I am a programmer with a passion for programming. I am passionate about providing solutions to the problems people face in their lives. I improved my skills as a Front-End programmer</p>
          <p style={{marginBottom:"30px"}}>I develop websites and applications using HTML, CSS,SCSS(SASS), Bootstrap,Material-UI, Ant Design, JavaScript,  React js, Redux(Redux-toolkit). I am familiar with designing models that will help me. With each project they put in, I am constantly improving myself</p>
          <p>I am a selfless person who strives for my dreams, hardworking and results-oriented, I always strive to achieve my best version</p>
        </ScrollAnimation>

      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={100}>
          <img style={{width:"100%"}} src={portfolioImage} alt="My image" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}
