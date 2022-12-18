import { Container } from './styles'

import reactIcon from '../../assets/react-icon.svg'

export function Footer() {
  return (
    <Container className="footer">
      <a href="#" className="logo">
        <span>Qodirov</span>
        <span>Sherzod</span>
      </a>
      <div>
        <p>
        This site <img src={reactIcon} alt="React" /> created with so many things
        </p>
      </div>

    </Container>
  )
}
