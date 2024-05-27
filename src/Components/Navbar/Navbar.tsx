import { Col, Container, Row } from "react-bootstrap";
import style from "./Navbar.module.scss";

export const Navbar = () => {
  return(
    <nav className={style.nav}>
      <Container fluid className="text-center">
        <Row className="justify-content-center justify-content-md-start py-3 px-md-5">
          <Col xs={3} md={"auto"}>
            <a href="#conhecimentos" target="_self" className="text-light text-decoration-none"> conhecimentos </a>
          </Col>
          
          <Col xs={3} md={"auto"}>
            <a href="#projetos" target="_self" className="text-light text-decoration-none"> Projetos </a>
          </Col>

          <Col xs={3} md={"auto"}>
            <a href="#contatos" target="_self" className="text-light text-decoration-none"> Contatos </a>
          </Col>
        </Row>
      </Container>
    </nav>
  )
}