/* eslint-disable no-undef */
import './style.scss';
import { useRef, useState } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import axios from 'axios';
import { Link } from 'react-router-dom';

const initialFormData = {
  nome: '',
  email: '',
  assunto: '',
  mensagem: ''
};

const Contato = () => {
  const [btnTest, setBtnTest] = useState({
    btnclass: '',
    btndisable: false
  });

  const [message, setMessage] = useState('');

  const [formData, updateFormData] = useState(initialFormData);

  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    document.getElementsByName('nome')[0].classList.remove('is-invalid');
    document.getElementsByName('email')[0].classList.remove('is-invalid');
    document.getElementsByName('assunto')[0].classList.remove('is-invalid');
    document.getElementsByName('mensagem')[0].classList.remove('is-invalid');

    if (formData.nome === '') {
      document.getElementsByName('nome')[0].classList.add('is-invalid');
      return;
    }

    if (formData.email === '') {
      document.getElementsByName('email')[0].classList.add('is-invalid');
      return;
    }

    if (formData.assunto === '') {
      document.getElementsByName('assunto')[0].classList.add('is-invalid');
      return;
    }

    if (formData.mensagem === '') {
      document.getElementsByName('mensagem')[0].classList.add('is-invalid');
      return;
    }

    setBtnTest({
      btnclass: 'disabled',
      btndisable: true
    });
    setMessage('');

    await axios
      .post(
        `${process.env.REACT_APP_HOST}`,
        {
          nome: formData.nome.trim(),
          email: formData.email.trim(),
          assunto: formData.assunto.trim(),
          mensagem: formData.mensagem.trim(),
          send_name: `${process.env.REACT_APP_FROM}`,
          send_mail: `${process.env.REACT_APP_NAME}`
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
      .then(function (response) {
        console.log('response.data', response.data);
        const {
          data: { message }
        } = response;

        setMessage(message);

        setBtnTest({
          btnclass: '',
          btndisable: false
        });

        updateFormData({ ...initialFormData });
      })
      .catch(function (error) {
        const {
          response: {
            data: { message }
          }
        } = error;
        setMessage(message);

        console.log('error.response', error.response);
      });

    setTimeout(() => {
      setMessage('');
    }, 3300);
  };

  const handleChange = (e: any) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
      <form className="container-fluid info info-contato" id="contato" ref={form}>
        <div className="row justify-content-center align-items-center">
          <ScrollAnimation
            animateIn="fadeInUpBig"
            animateOut="fadeInDown"
            className="col col-md-10 align-self-center bg-white pt-5 pb-5 rounded-3">
            <h1 className="text-center mb-5 fst-italic text-uppercase text-primary border-bottom">
              Entre em Contato conosco!
            </h1>

            {message && <div className="alert alert-info">{message}</div>}

            <div className="row">
              <div className="col-md-5">
                <div className="row">
                  <div className="col-12 mb-3 h2 border-bottom pb-3">Formulário de Contato</div>
                  <div className="col-12 mb-3">
                    <label htmlFor="InputNome" className="form-label">
                      Nome
                    </label>
                    <input
                      name="nome"
                      type="text"
                      className={`form-control`}
                      id="InputNome"
                      aria-describedby="nomeHelp validationNomeFeedback"
                      value={formData.nome}
                      onChange={handleChange}
                    />
                    <div id="validationNomeFeedback" className="invalid-feedback">
                      Campo obrigatório
                    </div>
                  </div>
                  <div className="col-10 mb-3">
                    <label htmlFor="InputEmail" className="form-label">
                      E-mail
                    </label>
                    <input
                      name="email"
                      type="email"
                      className="form-control"
                      id="InputEmail"
                      value={formData.email}
                      onChange={handleChange}
                      aria-describedby="emailHelp validationEmailFeedback"
                    />
                    <div id="validationEmailFeedback" className="invalid-feedback">
                      Campo obrigatório
                    </div>
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
                      value={formData.assunto}
                      onChange={handleChange}
                      aria-describedby="assuntoHelp validationAssuntoFeedback"
                    />
                    <div id="validationAssuntoFeedback" className="invalid-feedback">
                      Campo obrigatório
                    </div>
                  </div>
                  <div className="mb-3 col-12">
                    <label htmlFor="InputMensagem" className="form-label">
                      Mensagem
                    </label>
                    <textarea
                      name="mensagem"
                      id="mensagem"
                      className="form-control"
                      onChange={handleChange}
                      value={formData.mensagem}
                      aria-describedby="mensagemHelp validationMensagemFeedback"></textarea>
                    <div id="validationMensagemFeedback" className="invalid-feedback">
                      Campo obrigatório
                    </div>
                  </div>
                  <div className="mb-3 col-12">
                    <button
                      onClick={handleSubmit}
                      className={`text-uppercase btn btn-primary ${btnTest.btnclass}`}
                      disabled={btnTest.btndisable}>
                      enviar contato
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-7">
                <h2 className="mb-3 text-center text-sm-start border-bottom pb-3">
                  Informações de Contato
                </h2>
                <div className="d-flex flex-column flex-md-row align-items-center">
                  <div className="flex-shrink-0">
                    <img
                      src="yofi-itapolis.jpg"
                      alt="Instituto Yofi Itápolis"
                      className="img-fluid"
                      style={{
                        width: '255px'
                      }}
                    />
                  </div>
                  <div className="flex-grow-1 flex-grow-1 ms-3">
                    <strong className="d-block h3 border-bottom pb-2">Instituto Yofi - Itápolis</strong>
                    <strong className="d-block">
                      <i className="fas fa-phone-alt m-2"></i>
                      (16) 3262-1840
                    </strong>
                    <p className="text-uppercase">
                      AV. FRANCISCO PORTO, 1146 - CENTRO, ITÁPOLIS - SP, 14900-000
                    </p>
                    <Link to="/como-chegar/itapolis" className="float-end">
                      Como Chegar
                    </Link>
                  </div>
                </div>
                <div className="border-bottom m-3 mx-0" />
                <div className="d-flex flex-column flex-md-row align-items-center">
                  <div className="flex-shrink-0">
                    <img
                      src="yofi-ibitinga.jpg"
                      alt="Instituto Yofi Itápolis"
                      className="img-fluid"
                      style={{
                        width: '255px'
                      }}
                    />
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <strong className="d-block h3 border-bottom pb-2">Instituto Yofi - Ibitinga</strong>
                    <strong className="d-block">
                      <i className="fas fa-phone-alt me-2"></i>
                      (16) 3342-2810
                    </strong>
                    <p className="text-uppercase">
                      Av. Sete de Setembro, 760 - Centro, Ibitinga - SP, 14940-000
                    </p>
                    <Link to="/como-chegar/ibitinga" className="float-end">
                      Como Chegar
                    </Link>
                  </div>
                </div>

                {/* <div className="row">
                  <div className="col-12 mb-3 h2 border-bottom pb-3">Informações de Contato</div>
                  <div className="col-12 mb-3 pb-3">
                    <strong className="d-block">(16) 3262-1840 Itápolis</strong>
                    <p className="text-uppercase">
                      AV. FRANCISCO PORTO, 1146 - CENTRO, ITÁPOLIS - SP, 14900-000
                    </p>
                    <strong className="d-block">(16) 3342-2810 Ibitinga</strong>
                    <p className="text-uppercase">
                      Av. Sete de Setembro, 760 - Centro, Ibitinga - SP, 14940-000
                    </p>
                  </div>
                  <div className="col-12 mb-3 h2 border-bottom pb-3">Redes Sociais</div>
                  <div className="col-12 mb-3 pb-3 d-flex flex-column">
                    <a
                      href="https://www.facebook.com/institutoyofi"
                      target="_blank"
                      className="d-flex align-items-center text-uppercase mb-2 text-decoration-none"
                      rel="noopener noreferrer">
                      <i className="fab fa-facebook fa-2x me-2"></i>
                      <span>facebook</span>
                    </a>

                    <a
                      href="https://www.instagram.com/institutoyofi/"
                      target="_blank"
                      className="d-flex align-items-center text-uppercase text-decoration-none"
                      rel="noopener noreferrer">
                      <i className="fab fa-instagram fa-2x me-2"></i>
                      <span>instagram</span>
                    </a>
                    <br />
                  </div>
                </div> */}
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </form>
    </ScrollAnimation>
  );
};

export default Contato;
