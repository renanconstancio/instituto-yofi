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
        animateIn="fadeIn"
        navElement="span"
        navContainer=".custon-nav">
        <div
          className="item"
          style={{
            backgroundColor: '#fff',
            backgroundImage: 'url("banners/banner-01.jpg")'
          }}>
          <h1>banner a</h1>
          <div className="descriptions">
            Texto demonstrativo do banner <br />
            Banner A
          </div>
        </div>
        <div
          className="item"
          style={{
            backgroundColor: '#fff',
            backgroundImage: 'url("banners/banner-02.jpg")'
          }}>
          <h1>banner b</h1>
          <div className="descriptions">
            Texto demonstrativo do banner <br />
            Banner B
          </div>
        </div>
      </OwlCarousel>
      <div className="custon-nav"></div>
    </div>
  );
};

export default Banner;
