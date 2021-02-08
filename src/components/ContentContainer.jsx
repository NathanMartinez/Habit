import '../styles/ContentContainer.css'
import { Container } from 'react-bootstrap';

export default function ContentContainer({children}) {
  return <Container>{children}</Container>
}