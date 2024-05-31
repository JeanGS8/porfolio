import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-scroll";
import style from "./Navbar.module.scss";

export const Navbar = () => {
  return(
    <nav className={style.nav}>
      <Container fluid className="text-center">
        <Row className="justify-content-center justify-content-md-start py-3 px-md-5">
          <Col xs={3} md={"auto"}>
            <Link to="home" spy={true} smooth={true} offset={0} duration={500} className="text-light text-decoration-none">
              Perfil
            </Link>
          </Col>
          
          <Col xs={3} md={"auto"}>
            <Link to="conhecimentos" spy={true} smooth={true} offset={0} duration={500} className="text-light text-decoration-none">
              Conhecimentos
            </Link>
          </Col>
          
          <Col xs={3} md={"auto"}>
            <Link to="projetos" spy={true} smooth={true} offset={0} duration={500} className="text-light text-decoration-none">
              Projetos
            </Link>
          </Col>

          <Col xs={3} md={"auto"}>
            <Link to="contatos" spy={true} smooth={true} offset={0} duration={500} className="text-light text-decoration-none">
              Contatos
            </Link>
          </Col>
        </Row>
      </Container>
    </nav>
  )
}