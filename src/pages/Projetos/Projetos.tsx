import style from "./Projetos.module.scss";
import json from "./projetos.json";
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa";

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
      <Container fluid className={`${style.content} d-flex flex-column pt-5`}>
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
                      <Col xs={12} md={10} lg={6} className="d-flex flex-column justify-content-between">
                        <Row>
                          <Col>
                            <h3 className="text-center text-lg-start mt-3 mt-lg-0 m-0 pb-1">
                              {projeto.nome}
                              
                              {projeto.link?
                                <>
                                  <a href={projeto.link} target="_blank" className="mx-2">
                                    <FaLink  className={style.url} />
                                  </a>
                                  <a href={projeto.github} target="_blank">
                                    <FaGithub className={style.url}/>
                                  </a>
                                </>
                              :
                                <a href={projeto.github} target="_blank" className="mx-2">
                                  <FaGithub className={style.url}/>
                                </a>
                              }
                            </h3>
                            <p className="pt-1 m-0">{projeto.sobre}</p>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                </SwiperSlide>
              ))}
            </Swiper>
          </Col>
        </Row>
      </Container>
    </div>
  )
}