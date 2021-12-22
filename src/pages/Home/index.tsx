import './style.scss';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import OwlCarousel from 'react-owl-carousel';
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';

import Topo from '../../components/Topo';
import Rodape from '../../components/Rodape';
import { useState } from 'react';

const initialFormData = Object.freeze({
  nome: null,
  email: null,
  assunto: null,
  mensagem: null
});

const Home = () => {
  const [formData, updateFormData] = useState(initialFormData);

  const handleChange = (e: any) => {
    updateFormData({
      ...formData,
      // Trimming any whitespace
      [e.target.name]: e.target.value.trim() || null
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // if (formData.nome === null) formData.nome;
    // ... submit to API or something
    console.log(formData);
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  console.log(formData);

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

      <div className="container-fluid info info-quem-somos" id="quem_somos">
        <div className="row justify-content-end align-items-center">
          <div className="col col-md-7 align-self-center">
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

      <div className="container-fluid info info-unidades" id="nossas_unidades">
        <div className="row justify-content-start align-items-center pt-5 pb-5">
          <div className="col col-md-7 align-self-center">
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

      <div className="container-fluid info info-contato" id="contato">
        <div className="row justify-content-center align-items-center">
          <div className="col col-md-8 align-self-center bg-white pt-5 pb-5 rounded-3">
            <h1 className="text-center mb-5 fst-italic text-uppercase text-primary border-bottom">
              Entre em Contato
            </h1>
            <div className="row">
              <div className="col-12 mb-3">
                <label htmlFor="InputNome" className="form-label">
                  Nome
                </label>
                <input
                  name="nome"
                  type="text"
                  className={`form-control`}
                  id="InputNome"
                  aria-describedby="nomeHelp validationServerUsernameFeedback"
                  onChange={handleChange}
                />
                <div id="validationServerUsernameFeedback" className="invalid-feedback">
                  Please choose a username.
                </div>
              </div>
              <div className="col-5 mb-3">
                <label htmlFor="InputEmail" className="form-label">
                  E-mail
                </label>
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  id="InputEmail"
                  onChange={handleChange}
                />
              </div>
              <div className="col-7 mb-3">
                <label htmlFor="InputAssunto" className="form-label">
                  Assunto
                </label>
                <input
                  name="assunto"
                  type="assunto"
                  className="form-control"
                  id="InputAssunto"
                  aria-describedby="AssuntoHelp"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3 col-12">
                <label htmlFor="InputMensagem" className="form-label">
                  Mensagem
                </label>
                <textarea
                  name="mensagem"
                  id="mensagem"
                  className="form-control"
                  onChange={handleChange}></textarea>
              </div>
              <div className="mb-3 col-12">
                <button onClick={handleSubmit} className="btn btn-primary">
                  enviar contato
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Rodape />
    </>
  );
};

export default Home;
