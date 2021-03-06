import './style.scss';

import { Link } from 'react-router-dom';

import ScrollAnimation from 'react-animate-on-scroll';
import scrollToElement from 'scroll-to-element';

import Topo from '../../components/Topo';
import Rodape from '../../components/Rodape';
import Banner from '../../components/Banner';
import Contador from '../../components/Contador';
import Contato from '../Contato';

const Home = () => {
  return (
    <>
      <Topo />

      <Banner />

      <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
        <div className="container-fluid info info-quem-somos" id="quem_somos">
          <div className="row justify-content-end align-items-center">
            <div className="col col-md-7 align-self-center">
              <ScrollAnimation animateIn="fadeInDownBig" animateOut="fadeInDown">
                <h1 className="button">quem somos</h1>
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeInUpBig" animateOut="fadeInDown">
                <div>
                  O Instituto Yofi surgiu da união de dois profissionais altamente capacitados e com uma
                  visão empreendedora de entregar ao seu paciente o melhor do atendimento em odontologia.{' '}
                  <br />
                  <br />
                  Dra. Luciane, especialista em ortodontia, e Dr. Rogério, especialista em prótese, são
                  formados em Odontologia e com suas especializações pela UNESP e possuem diversos outros
                  cursos de atualização, inclusive fora do país, como o exemplo de seu curso na Carolina
                  do Norte - EUA.
                  <Link
                    to="/quem-somos"
                    className="d-block float-end"
                    onClick={() =>
                      scrollToElement('#root', {
                        offset: 0,
                        duration: 1500
                      })
                    }>
                    Saiba mais
                  </Link>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" delay={0}>
        <div className="info info-animated" id="servicos">
          <div className="container">
            <div className="row align-items-center align-self-center text-center text-white">
              <div className="col">
                <i className="fas fa-users fa-3x pb-1 d-block"></i>
                <Contador start={500} end={920} duration={2.2} delay={0.3} />
                Clientes
              </div>
              <div className="col">
                <i className="fas fa-heartbeat fa-3x pb-1 d-block"></i>
                <Contador start={50} end={320} duration={1.2} delay={0.3} />
                Cirurgias Realizadas
              </div>
              <div className="col">
                <i className="fas fa-globe fa-3x pb-1 d-block"></i>
                <Contador start={50} end={220} duration={1.2} delay={1.3} />
                Experiencia
              </div>
              <div className="col">
                <i className="fas fa-trophy fa-3x pb-1 d-block"></i>
                <Contador start={50} end={120} duration={1.2} delay={0.5} />
                Avaliações
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
        <div className="container-fluid info info-unidades" id="nossas_unidades">
          <div className="row justify-content-start align-items-center pt-5 pb-5">
            <div className="col col-md-7 align-self-center">
              <ScrollAnimation animateIn="fadeInDownBig" animateOut="fadeInDown">
                <Link className="button" to="/nossas-unidades">
                  nossas unidades
                </Link>
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeInUpBig" animateOut="fadeInDown">
                <div>
                  O Instituto Yofi surgiu da união de dois profissionais altamente capacitados e com uma
                  visão empreendedora de entregar ao seu paciente o melhor do atendimento em odontologia.{' '}
                  <br />
                  <br />
                  Dra. Luciane, especialista em ortodontia, e Dr. Rogério, especialista em prótese, são
                  formados em Odontologia e com suas especializações pela UNESP e possuem diversos outros
                  cursos de atualização, inclusive fora do país, como o exemplo de seu curso na Carolina
                  do Norte - EUA.
                  <br />
                  <br />
                  Hoje o Instituto Yofi conta com 2 Unidades de atendimento sendo uma em Itápolis e a
                  <br />
                  outra em Ibitinga, clique no botão abaixo e confira um pouco sobre nossas clínicas.
                </div>
                <Link
                  to="/galeria"
                  className="d-block float-end"
                  onClick={() =>
                    scrollToElement('#root', {
                      offset: 0,
                      duration: 1500
                    })
                  }>
                  Saiba mais
                </Link>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </ScrollAnimation>

      <Contato />

      {/* <div className="info">
        <MapPage />
      </div> */}

      <Rodape />
    </>
  );
};

export default Home;
