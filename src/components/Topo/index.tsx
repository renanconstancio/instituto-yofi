import './style.scss';
// https://www.npmjs.com/package/react-scroll
import * as Scroll from 'react-scroll';
import { Link as LScrol } from 'react-scroll';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Topo = () => {
  const { pathname } = useLocation();

  const addAbsolue = pathname.split('/')[1];

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scroll = Scroll.animateScroll;

  return (
    <>
      <i
        className={`${
          scrollPosition === 0 && 'd-none'
        } fas fa-chevron-circle-up scrolling-top fa-2x text-primary`}
        onClick={() => scroll.scrollToTop()}></i>
      <header
        className={`p-3 px-0 ${addAbsolue === '' ? 'fixed-top' : 'bg-white'} ${
          scrollPosition > 0 && addAbsolue === '' && 'set-scrol'
        }`}>
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col col-md-2">
              <Link to="/">
                <img src="logo.png" loading="lazy" alt="" className="img-fluid" />
              </Link>
            </div>
            <div className="col col-md-7">
              <nav className="d-flex align-items-center text-uppercase">
                <>
                  {!addAbsolue && (
                    <>
                      <span className="flex-fill flip">
                        <LScrol to="quem_somos" spy={true} smooth={true} offset={0} duration={500}>
                          <span>quem somos</span>
                          <span>quem somos</span>
                        </LScrol>
                      </span>
                      <span className="flex-fill flip">
                        <LScrol
                          activeClass="active"
                          to="nossas_unidades"
                          spy={true}
                          smooth={true}
                          offset={0}
                          duration={500}>
                          <span>unidades</span>
                          <span>unidades</span>
                        </LScrol>
                      </span>
                      <span className="flex-fill flip">
                        <a href="">
                          <span>serviços</span>
                          <span>serviços</span>
                        </a>
                      </span>
                      <span className="flex-fill flip">
                        <a href="">
                          <span>equipe</span>
                          <span>equipe</span>
                        </a>
                      </span>
                      <span className="flex-fill flip">
                        <LScrol
                          activeClass="active"
                          to="contato"
                          spy={true}
                          smooth={true}
                          offset={0}
                          duration={500}>
                          <span>contato</span>
                          <span>contato</span>
                        </LScrol>
                      </span>
                    </>
                  )}
                  {addAbsolue && (
                    <>
                      <span className="flex-fill flip">
                        <Link to="/quem-somos">
                          <span>quem somos</span>
                          <span>quem somos</span>
                        </Link>
                      </span>
                      <span className="flex-fill flip">
                        <Link to="/nossas-unidades">
                          <span>unidades</span>
                          <span>unidades</span>
                        </Link>
                      </span>
                      <span className="flex-fill flip">
                        <a href="">
                          <span>serviços</span>
                          <span>serviços</span>
                        </a>
                      </span>
                      <span className="flex-fill flip">
                        <a href="">
                          <span>equipe</span>
                          <span>equipe</span>
                        </a>
                      </span>
                      <span className="flex-fill flip">
                        <Link to="/">
                          <span>contato</span>
                          <span>contato</span>
                        </Link>
                      </span>
                    </>
                  )}
                </>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Topo;
