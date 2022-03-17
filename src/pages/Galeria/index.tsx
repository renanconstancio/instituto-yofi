/* eslint-disable no-undef */
import './style.scss';
import { Helmet } from 'react-helmet';
import Rodape from '../../components/Rodape';
import Topo from '../../components/Topo';
import { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import { Link } from 'react-router-dom';

const Galeria = () => {
  const [images, setImages] = useState([] as any);
  const [arrOfImages, setArrOfImages] = useState([] as any);
  const [showModal, setShowModal] = useState(false);
  const [indexOfImages, setIndexOfImages] = useState(0);

  const openModalAndSetIndex = (index: number) => {
    setIndexOfImages(index);
    setShowModal(true);
    return;
  };

  const galeriaImgs = (int: number, title: string, dir: string) => {
    for (let i: number = 1; i <= int; i++) {
      let arr = [{ i: i, title: title, dir: dir }];
      setImages((old: any) => [...old, ...arr]);

      let arrDir = `./${dir}/img-(${i}).jpg`;
      setArrOfImages((old: any) => [...old, arrDir]);
    }
  };

  const InicioGaleria = () => (
    <>
      <h1 className="fst-italic mb-5 pb-3 col col-12 border-bottom">Galeria de Fotos</h1>
      <div className="col-12 col-sm-6">
        <div className="img">
          <img src={`./itapolis/img-(1).jpg`} alt="" />
        </div>
        <h3 className="fst-italic mb-3">Unidade de Itápolis/SP</h3>
        <strong className="d-block">
          <i className="fas fa-phone-alt m-2"></i>
          (16) 3262-1840
        </strong>
        <p className="text-uppercase">AV. FRANCISCO PORTO, 1146 - CENTRO, ITÁPOLIS - SP, 14900-000</p>
        <small>
          <span
            onClick={() => galeriaImgs(20, 'Galeria de Fotos - Itápolis/SP', 'itapolis')}
            className="btn btn-link fst-italic float-end">
            Mais Fotos
          </span>
          <Link to="/como-chegar/itapolis" className="btn btn-link fst-italic float-end">
            Como Chegar
          </Link>
        </small>
      </div>
      <div className="col-12 col-sm-6">
        <div className="img">
          <img src={`./ibitinga/img-(1).jpg`} alt="" />
        </div>
        <h3 className="fst-italic mb-3">Unidade de Ibitinga/SP</h3>
        <strong className="d-block">
          <i className="fas fa-phone-alt me-2"></i>
          (16) 3342-2810
        </strong>
        <p className="text-uppercase">Av. Sete de Setembro, 760 - Centro, Ibitinga - SP, 14940-000</p>
        <small>
          <span
            onClick={() => galeriaImgs(31, 'Galeria de Fotos - Ibitinga/SP', 'ibitinga')}
            className="btn btn-link fst-italic float-end">
            Mais Fotos
          </span>
          <Link to="/como-chegar/ibitinga" className="btn btn-link fst-italic float-end">
            Como Chegar
          </Link>
        </small>
      </div>
    </>
  );

  const LoopGaleriaImgs = ({ images }: { images: any[] }) => (
    <>
      <h1 className="fst-italic mb-5 pb-3 col col-12 border-bottom">{images[0].title}</h1>
      <div className="text-end">
        <span className="btn fst-italic btn-link" onClick={() => setImages([])}>
          Voltar
        </span>
      </div>
      {images.map((imgs: { i: number; dir: number; title: string }, i) => (
        <div
          className="col-12 col-sm-3 img"
          style={{ cursor: 'pointer' }}
          key={i}
          onClick={() => openModalAndSetIndex(i)}>
          <img src={`./${imgs.dir}/xs/img-(${imgs.i}).jpg`} alt="" />
        </div>
      ))}
      <div className="text-end">
        <span className="btn fst-italic btn-link" onClick={() => setImages([])}>
          Voltar
        </span>
      </div>
    </>
  );

  return (
    <>
      <Topo />
      <div className="bg-white border-top pt-5 pb-5">
        <div className="container galeria">
          <div className="row">
            {images.length === 0 ? <InicioGaleria /> : <LoopGaleriaImgs images={images} />}
            {showModal && (
              <Lightbox
                mainSrc={arrOfImages[indexOfImages]}
                nextSrc={arrOfImages[(indexOfImages + 1) % arrOfImages.length]}
                prevSrc={arrOfImages[(indexOfImages + arrOfImages.length - 1) % arrOfImages.length]}
                onCloseRequest={() => setShowModal(false)}
                onMovePrevRequest={() =>
                  setIndexOfImages((indexOfImages + arrOfImages.length - 1) % arrOfImages.length)
                }
                onMoveNextRequest={() =>
                  setIndexOfImages((indexOfImages + arrOfImages.length + 1) % arrOfImages.length)
                }
              />
            )}
          </div>
        </div>
      </div>
      <Rodape />
      <Helmet>
        <title>Galeria de Fotos - {process.env.REACT_APP_TITLE}</title>
        <link rel="canonical" href={window.location.href} />
        <meta
          name="description"
          content="Instituto Yofi conta com equipe qualifica para melhor lhe atender."
        />
      </Helmet>
    </>
  );
};

export default Galeria;
