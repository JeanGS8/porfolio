import style from "./Projetos.module.scss";
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Col, Container, Row } from "react-bootstrap";
import { IProjetos } from "../../interface/IProjetos.interface";

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


  const projetos: IProjetos[] = [
    {
      "nome": "Stream-finder",
      "sobre": "stream-finder foi realizado em grupo como parte de um trabalho da faculdade para o semestre mobile. O propósito fundamental deste aplicativo de busca de filmes e séries consiste em facilitar a experiência dos usuários na localização de plataformas para assistir a conteúdos cinematográficos, por meio da disponibilização de uma plataforma intuitiva e repleta de recursos. Dotado de descrições minuciosas e funcionalidades de recomendação inteligente, o aplicativo não apenas satisfaz as preferências individuais dos espectadores, mas também fomenta a descoberta de novas obras audiovisuais.",
      "link": "https://stream-finder-mu.vercel.app/",
      "github": "https://github.com/JeanGS8/stream-finder",
      "fotosJson": [
        "stream-finder/1.png",
        "stream-finder/2.png",
        "stream-finder/3.png",
        "stream-finder/4.png",
        "stream-finder/5.png",
        "stream-finder/6.png",
        "stream-finder/7.png"
      ]
    },
    {
      "nome": "angular portfolio",
      "sobre": "Durante o curso avançado de Angular 2 na Udemy, desenvolvi esse projeto. Utilizando TypeScript e as técnicas mais recentes do Angular, criei um portfólio dinâmico e moderno.",
      "link": 'https://angular-portfolio-rose.vercel.app/',
      "github": "https://github.com/JeanGS8/angular-portfolio",
      "fotosJson": [
        "angular-portfolio/1.png",
        "angular-portfolio/2.png"
      ]
    },
    {
      "nome": "Blog Pessoal Front-end",
      "sobre": "O BlogPessoal, construído em React, é o front-end de uma plataforma de blog onde os usuários podem criar contas, fazer login e logout, além de gerenciar temas e postagens. Eles podem cadastrar, alterar e deletar temas, assim como criar, editar e excluir postagens. A interface intuitiva facilita a organização e personalização do conteúdo, proporcionando uma experiência agradável e eficiente.",
      "link": "http://blog-pessoal-eight.vercel.app/",
      "github": "https://github.com/JeanGS8/blogpessoal-front",
      "fotosJson": [
        "blog-front/1.jpeg",
        "blog-front/2.jpeg",
        "blog-front/3.jpeg",
        "blog-front/4.jpeg"
      ]
    },
    {
      "nome": "Blog Pessoal Back-end",
      "sobre": "O BlogPessoal foi desenvolvido utilizando a tecnologia Nest.js para o back-end do projeto. É uma plataforma de blog onde os usuários podem criar contas, fazer login e logout, além de gerenciar temas e postagens. Eles podem cadastrar, alterar e deletar temas, assim como criar, editar e excluir postagens. A interface intuitiva facilita a organização e personalização do conteúdo, proporcionando uma experiência agradável e eficiente.",
      "link": '',
      "github": "https://github.com/JeanGS8/blog-back",
      "fotosJson": [
        "blog-back/1.jpeg",
        "blog-back/2.jpeg"
      ]
    },
    {
      "nome": "Pokedex",
      "sobre": "A Pokedex, desenvolvida em Next.js, é uma ferramenta simples que mostra informações básicas de Pokémon das primeiras duas gerações. Com foco nos tipos, altura e peso de cada Pokémon, oferece uma visão direta e útil para os usuários.",
      "link": "https://pokedex-jeangs8.vercel.app/",
      "github": "https://github.com/JeanGS8/pokedex",
      "fotosJson": [
        "pokedex/1.jpeg",
        "pokedex/2.jpeg",
        "pokedex/3.jpeg",
        "pokedex/4.jpeg",
        "pokedex/5.jpeg"
      ]
    },
    {
      "nome": "Estudos com cronômetro",
      "sobre": "É uma aplicação minimalista que permite aos usuários cadastrar tarefas e estimar o tempo necessário para sua conclusão. Depois, podem selecionar uma tarefa para iniciar o cronômetro, sem a necessidade de um banco de dados. É uma solução simples e eficaz para gerenciar o tempo de estudo de forma organizada e produtiva.",
      "link": "https://jeangs8.github.io/alura-studies-react/",
      "github": "https://github.com/JeanGS8/alura-studies-react",
      "fotosJson": [
        "alura-studies/1.jpeg"
      ]
    }
  ]

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
              {projetos.map( (projeto, keyProjeto) => (
                <SwiperSlide key={keyProjeto}>
                    <Row className="justify-content-around">
                      <Col xs={12} md={10} lg={5}>
                        <Swiper {...swiperFilho}>
                          {projeto.fotosJson.map( (fotoJson, keyFoto) => {
                            const foto = require(`../../assets/${fotoJson}`);
                            return (
                              <SwiperSlide key={keyFoto} className="text-center">
                                <img src={foto} alt={foto} loading="eager"/>
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