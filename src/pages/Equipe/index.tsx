/* eslint-disable no-undef */
import './style.scss';
import { Helmet } from 'react-helmet';
import Rodape from '../../components/Rodape';
import Topo from '../../components/Topo';

const Equipe = () => {
  return (
    <>
      <Topo />

      <div className="bg-white border-top pt-5 pb-5">
        <div className="container equipe">
          <div className="row justify-content-center">
            <h1 className="fst-italic mb-5 pb-3 col col-12 border-bottom">Unidade de Itápolis</h1>

            <div className="row">
              <div className="col-sm-4 col-xs-12 img">
                <img src="yofi-itapolis-lg.jpg" alt="Instituto Yofi Itápolis" />
              </div>
              <div className="col-12 col-sm-8">
                <div className="row">
                  <div className="col-12 col-sm-6 p-1">
                    <h3 className="fst-italic mb-3">Dr. Rogério Martins Guimarães</h3>
                    <div className="fst-italic fw-bold">Prótese | Reabilitação Oral.</div>
                    <small>
                      <i className="fw-bold">CRO/SP 44233</i>
                    </small>
                    <hr />
                  </div>
                  <div className="col-12 col-sm-6 p-1">
                    <h3 className="fst-italic mb-3">Dra. Luciane B. M. Guimarães</h3>
                    <div className="fst-italic fw-bold">Ortodontista</div>
                    <small>
                      <i className="fw-bold">CRO/SP 51697</i>
                    </small>
                    <hr />
                  </div>
                  <div className="col-12 col-sm-6 p-1">
                    <h3 className="fst-italic mb-3">Dra. Ariane Borges Carvalho</h3>
                    <div className="fst-italic fw-bold">Metre e Especialista em Ordontopediatria.</div>
                    <small>
                      <i className="fw-bold">CRO/SP 104613</i>
                    </small>
                    <hr />
                  </div>
                  <div className="col-12 col-sm-6 p-1">
                    <h3 className="fst-italic mb-3">Prof. Dr. Luiz Antônio B. B. Filho</h3>
                    <div className="fst-italic fw-bold">Implantodontia | Periodontia Cirurgia Oral.</div>
                    <small>
                      <i className="fw-bold">CRO/SP 101694</i>
                    </small>
                    <hr />
                  </div>
                </div>
              </div>
            </div>

            <h1 className="mt-5 fst-italic mb-5 pb-3 col col-12 border-bottom">Unidade de Ibitinga</h1>

            <div className="row">
              <div
                className="col-12 col-sm-4 img"
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  border: 'solid 16px #fff'
                }}>
                <img src="yofi-ibitinga-lg.jpg" alt="Instituto Yofi Ibitinga" />
              </div>
              <div className="col-12 col-sm-8">
                <div className="row">
                  <div className="col-12 col-sm-6 p-3">
                    <h3 className="fst-italic mb-3">Dra. Luciane Marrone Guimarães</h3>
                    <div className="fst-italic fw-bold">Especialista em Ortodontia e Ortopedia.</div>
                    <small>
                      <i className="fw-bold">CRO/SP 51697</i>
                    </small>
                    <hr />
                  </div>
                  <div className="col-12 col-sm-6 p-3">
                    <h3 className="fst-italic mb-3">Prof. Dr. Alexsandro de Moura</h3>
                    <div className="fst-italic fw-bold">
                      Prof. Implantodontia | Cirurgia e Traumatologia Buco Maxilo facial.
                    </div>
                    <small>
                      <i className="fw-bold">CRO/SP 88189</i>
                    </small>
                    <hr />
                  </div>
                  <div className="col-12 col-sm-6 p-3">
                    <h3 className="fst-italic mb-3">Dra. Gabriela Marques</h3>
                    <div className="fst-italic fw-bold">
                      Cirurgiã Dentista | Odontopediatria e Clinico Geral.
                    </div>
                    <small>
                      <i className="fw-bold">CRO/SP 141385</i>
                    </small>
                    <hr />
                  </div>

                  {/* <div className="col col-6 p-3">
                    <h3 className="fst-italic mb-3">Dr. Rogério</h3>
                    <div className="fst-italic fw-bold">Prótese e Estética.</div>
                    <hr />
                  </div> */}
                </div>
              </div>
            </div>
            <div className="col fst-italic mt-5 mb-5 text-center" style={{ fontSize: '1.3rem' }}>
              Ambas as Clínicas em Itápolis e Ibitinga, estão equipadas com consultórios e aparelhos de
              <br />
              última geração para atender todos os pacientes e solucionar todos os problemas desde os
              <br />
              mais simples até os mais complexos, como, ortodônticos, cirurgias, estéticas, implantes,
              <br />
              próteses, clareamentos dentais com técnicas que não trazem sensibilidade para os dentes,
              <br />
              entre outros, No Institudo Yofi você pode ficar tranquilo que os melhores profissionais com
              <br />
              os melhores equipamentos irão te atender e lhe proporcionar os melhores resultados em
              ortodontia.
            </div>
          </div>
        </div>
      </div>

      {/* <div className="bg-white border-top pt-5 pb-5">
        <div className="container">
          <div className="row justify-content-center">
            <h1 className="fst-italic text-center mb-5 pb-3 col col-12 border-bottom">Nossa Equipe</h1>
            <div className="col col-6 p-3">
              <h3 className="fst-italic mb-3 text-center">Dra. Luciane B. Marrone Guimarães</h3>
              <img src="./equipe/luciane-840.jpg" className="img-fluid img-thumbnail rounded" />
              <div className="callout fst-italic fw-bold">Especialista em Ortodontia.</div>
            </div>
            <div className="col col-6 p-3">
              <h3 className="fst-italic mb-3">Dr. Rogério Martins Guimarães</h3>
              <img src="./equipe/rogerio-841.jpg" className="img-fluid img-thumbnail rounded" />
              <div className="callout fst-italic fw-bold">Especialista em Ortodontia.</div>
            </div>
            <h2 className="fst-italic text-center mb-5 pb-3 col col-12 border-bottom">
              Nossos Parceiros
            </h2>
            <div className="col col-6 p-3">
              <h3 className="fst-italic mb-3 text-center">Dra. Ariany Borges Carvalho</h3>
              <img src="./equipe/ariany-bordges.jpg" className="img-fluid img-thumbnail rounded" />
              <div className="callout fst-italic fw-bold">Especialista em Odontopediatria.</div>
            </div>
            <div className="col col-6 p-3">
              <h3 className="fst-italic mb-3">Dr. Luiz Antônio Borelli Barros Filho</h3>
              <img src="./equipe/luiz-antonio.jpg" className="img-fluid img-thumbnail rounded" />
              <div className="callout fst-italic fw-bold">
                Especilista em Periodontia e Implantodontia.
              </div>
            </div>
            <h2 className="fst-italic text-center mb-5 pb-3 col col-12 border-bottom">
              Nossas Unidades
            </h2>
            <div className="col col-6 p-3">
              <h3 className="fst-italic mb-3 text-center">Rosemeire</h3>
              <img src="./equipe/rosemeire-842.jpg" className="img-fluid img-thumbnail rounded" />
              <div className="callout fst-italic fw-bold">Unidade de Itápolis/SP.</div>
            </div>
            <div className="col col-6 p-3">
              <h3 className="fst-italic mb-3">Andréia</h3>
              <img src="./equipe/andreia-844.jpg" className="img-fluid img-thumbnail rounded" />
              <div className="callout fst-italic fw-bold">Unidade de Ibitinga/SP.</div>
            </div>
          </div>
        </div>
      </div> */}

      <Rodape />
      <Helmet>
        <title>Nossa Esquipe - {process.env.REACT_APP_TITLE}</title>
        <link rel="canonical" href={window.location.href} />
        <meta
          name="description"
          content="Instituto Yofi conta com equipe qualifica para melhor lhe atender."
        />
      </Helmet>
    </>
  );
};

export default Equipe;
