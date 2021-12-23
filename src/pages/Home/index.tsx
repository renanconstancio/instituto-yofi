import './style.scss';

import { Link } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';

import ScrollAnimation from 'react-animate-on-scroll';

import Topo from '../../components/Topo';
import Rodape from '../../components/Rodape';
import Banner from '../../components/Banner';
import Contato from '../Contato';

const Home = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Topo />

      <Banner />

      <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
        <div className="container-fluid info info-quem-somos" id="quem_somos">
          <div className="row justify-content-end align-items-center">
            <div className="col col-md-7 align-self-center">
              <ScrollAnimation animateIn="fadeInDownBig" animateOut="fadeInDown">
                <Link className="button" to="/quem-somos" onClick={scrollToTop}>
                  quem somos
                </Link>
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeInUpBig" animateOut="fadeInDown">
                <div>
                  O Instituto Yofi surgiu da união de dois profissionais altamente capacitados e com
                  uma visão empreendedora de entregar ao seu paciente o melhor do atendimento em
                  odontologia. <br />
                  <br />
                  Dra. Luciane, especialista em ortodontia, e Dr. Rogério, especialista em prótese,
                  são formados em Odontologia e com suas especializações pela UNESP e possuem
                  diversos outros cursos de atualização, inclusive fora do país, como o exemplo de
                  seu curso na Carolina do Norte - EUA.
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </ScrollAnimation>

      <div className="ads">
        <img src="imagem-teste.jpg" alt="Teste" className="img-fluid" />
      </div>
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
                  O Instituto Yofi surgiu da união de dois profissionais altamente capacitados e com
                  uma visão empreendedora de entregar ao seu paciente o melhor do atendimento em
                  odontologia. <br />
                  <br />
                  Dra. Luciane, especialista em ortodontia, e Dr. Rogério, especialista em prótese,
                  são formados em Odontologia e com suas especializações pela UNESP e possuem
                  diversos outros cursos de atualização, inclusive fora do país, como o exemplo de
                  seu curso na Carolina do Norte - EUA.
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </ScrollAnimation>

      <Contato />

      <Rodape />
    </>
  );
};

export default Home;
