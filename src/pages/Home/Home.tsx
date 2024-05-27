import { Col, Container, Row } from "react-bootstrap";
import foto from "../../assets/quad.jpg";
import style from "./Home.module.scss";

export const Home = () => {
  return(
    <Container fluid id="home" className={`${style.home} d-flex flex-column flex-column-reverse flex-md-row justify-content-center justify-content-md-evenly align-items-md-center`}>
      <Row>
        <Col xs={"auto"} className='mx-auto'>
          <p className='my-0'>Oi, eu sou</p>
          <h1 className='my-0'>Jean Gomes.</h1>
          <p className='my-0'>Desenvolvedor Full-stack</p>
        </Col>
      </Row>
      <Row>
        <Col xs={10} sm={"auto"} className='text-center mb-5 mb-md-0 mx-auto'>
          <img src={foto} className={`${style.foto} w-100`} alt="Jean" />
        </Col>
      </Row>
    </Container>
  )
}