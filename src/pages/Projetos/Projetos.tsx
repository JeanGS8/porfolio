import style from "./Projetos.module.scss";
import json from "./projetos.json";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Col, Container, Row } from "react-bootstrap";

export const Projetos = () => {
  
  const swiperPai = {
    slidesPerView: 1,
    loop: true,
    centeredSlides: true,
    navigation: true,
    pagination: {
      type: "fraction" as const
    },
    modules: [Navigation, Pagination]
  }
  
  const swiperFilho = {
    slidesPerView: 1, 
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      clickable: true,
    },
    modules: [Autoplay, Pagination]
  }

  return(
    <div id="projetos" className={style.projetos}>
      <Container fluid className={`${style.content} d-flex flex-column`}>
        <Row>
          <Col xs={"auto"} className="mx-auto pt-5">
            <h2>Projetos</h2>
          </Col>
        </Row>
        <Row className="my-auto">
          <Col xs={12}>
            <Swiper {...swiperPai} className="pb-5">
              {json.map( (projeto, keyProjeto) => (
                <SwiperSlide key={keyProjeto}>
                  <Container fluid>
                    <Row className="justify-content-around">
                      <Col xs={12} md={10} lg={5}>
                        <Swiper {...swiperFilho}>
                          {projeto.fotosJson.map( (fotoJson, keyFoto) => {
                            const foto = require(`../../assets/${fotoJson}`);
                            return (
                              <SwiperSlide key={keyFoto}>
                                <img src={foto} alt={foto}/>
                              </SwiperSlide>
                            )
                          })}
                        </Swiper>
                      </Col>
                      <Col xs={12} md={10} lg={6}>
                        <h3 className="text-center text-lg-start mt-3 mt-lg-0 m-0 pb-1">{projeto.nome}</h3>
                        <p className="pt-1 m-0">{projeto.sobre}</p>
                      </Col>
                    </Row>
                  </Container>
                </SwiperSlide>
              ))}
            </Swiper>
          </Col>
        </Row>
      </Container>
    </div>
  )
}