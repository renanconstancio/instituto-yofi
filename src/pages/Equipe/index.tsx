/* eslint-disable no-undef */
import { Helmet } from 'react-helmet';
import Rodape from '../../components/Rodape';
import Topo from '../../components/Topo';

const Equipe = () => {
  return (
    <>
      <Topo />

      <div className="bg-white border-top pt-5 pb-5">
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
      </div>

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
