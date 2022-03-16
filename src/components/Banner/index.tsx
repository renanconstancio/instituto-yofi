import './style.scss';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'react-owl-carousel';

const Banner = () => {
  return (
    <div className="banner">
      <OwlCarousel
        loop
        className="owl-theme"
        items={1}
        margin={0}
        nav={true}
        dots={false}
        autoplay={true}
        lazyLoad={true}
        animateIn="fadeInLeft"
        smartSpeed={660}
        navElement="span"
        autoplayTimeout={7500}
        navContainer=".custon-nav">
        <div
          className="item"
          style={{
            backgroundColor: '#fff',
            backgroundImage: 'url("banners/banner-01.jpg")'
          }}>
          <h1>EQUIPE ESPECIALIZADA</h1>
          <div className="descriptions">
            Todos os profissionais altamente qualificados e<br />
            atualizadas com tudo o que existe de mais novo no mercado.
          </div>
        </div>
        <div
          className="item"
          style={{
            backgroundColor: '#fff',
            backgroundImage: 'url("banners/banner-02.jpg")'
          }}>
          <h1>CLÍNICAS EQUIPADAS</h1>
          <div className="descriptions">
            Todas as salas do Instituto Yofi possuem
            <br />
            equipamentos de última geração proporcionando
            <br />
            resultados fantásticos
          </div>
        </div>
      </OwlCarousel>
      <div className="custon-nav"></div>
    </div>
  );
};

export default Banner;
