import './style.scss';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import OwlCarousel from 'react-owl-carousel';
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';

import Topo from '../../components/Topo';
import Rodape from '../../components/Rodape';

const Home = () => {
  // https://www.npmjs.com/package/react-scroll

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Topo />
      <div className="banner">
        <OwlCarousel
          className="owl-theme"
          items={1}
          loop={true}
          margin={0}
          nav={false}
          dots={false}>
          <div className="item">
            <img src="banners/banner-01.jpg" loading="lazy" />
          </div>
          <div className="item">
            <img src="banners/banner-01.jpg" loading="lazy" />
          </div>
        </OwlCarousel>
      </div>

      <div className="container-fluid info-quem-somos" id="quem_somos">
        <div className="row justify-content-end pt-5 pb-5">
          <div className="col col-md-7 pt-5 pb-5">
            <Link className="button" to="/quem-somos" onClick={scrollToTop}>
              quem somos
            </Link>
            <div>
              O Instituto Yofi surgiu da união de dois profissionais altamente capacitados e com uma
              visão empreendedora de entregar ao seu paciente o melhor do atendimento em
              odontologia. <br />
              <br />
              Dra. Luciane, especialista em ortodontia, e Dr. Rogério, especialista em prótese, são
              formados em Odontologia e com suas especializações pela UNESP e possuem diversos
              outros cursos de atualização, inclusive fora do país, como o exemplo de seu curso na
              Carolina do Norte - EUA.
            </div>
          </div>
        </div>
      </div>

      <div className="ads">
        <img src="imagem-teste.jpg" alt="Teste" className="img-fluid" />
      </div>

      <div className="container-fluid info-unidades">
        <div className="row justify-content-start pt-5 pb-5">
          <div className="col col-md-7 pt-5 pb-5" id="nossas_unidades">
            <Link className="button" to="/nossas-unidades">
              nossas unidades
            </Link>
            <div>
              O Instituto Yofi surgiu da união de dois profissionais altamente capacitados e com uma
              visão empreendedora de entregar ao seu paciente o melhor do atendimento em
              odontologia. <br />
              <br />
              Dra. Luciane, especialista em ortodontia, e Dr. Rogério, especialista em prótese, são
              formados em Odontologia e com suas especializações pela UNESP e possuem diversos
              outros cursos de atualização, inclusive fora do país, como o exemplo de seu curso na
              Carolina do Norte - EUA.
            </div>
          </div>
        </div>
      </div>
      <Rodape />
    </>
  );
};

export default Home;
