import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import telegramIcon from "../../assets/telegram.png"


export function Contact() {

  return (
    <Container id="contact">
      <header>
        <h2>Contact me</h2>
        <p>If you have seen my potential or want to talk to me, feel free to send me a message</p>
      </header>
      <div className="contacts">
        <a className="link-tag" target="_blank" href="mailto:sherzodqadirov01@gmail.com">
          <div>
            <img src={emailIcon} alt="Email" />
            <span>sherzodqadirov01@gmail.com</span>
          </div>
        </a>
        <a className="link-tag"  href="tel:+998994236134">
          <div>
            <img src={phoneIcon} alt="tell" />
            <span>(99) 423-61-34</span>
          </div>
        </a>

        <a className="link-tag" target="_blank" href="https://t.me/kodirovsh01">
          <div>
            <img src={telegramIcon} alt="teleg" />
            <span>Sherzod Qodirov</span>
          </div>
        </a>
      </div>
    </Container>
  )
}