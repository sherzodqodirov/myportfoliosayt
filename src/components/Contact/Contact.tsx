import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact me</h2>
        <p>If you have seen my potential or want to talk to me, feel free to send me a message</p>
      </header>
      <div className="contacts">
        <div>
          <img src={emailIcon} alt="Email" />
          <a href="mailto:ahrorsulaymanov2@gmail.com">ahrorsulaymanov2@gmail.com</a>
        </div>
        <div>
          <img src={phoneIcon} alt="Email" />
          <a href="tel:+998930085504">(93) 008-55-04</a>
        </div>  
      </div>
      <Form></Form>
    </Container>
  )
}