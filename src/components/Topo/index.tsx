// https://www.npmjs.com/package/react-scroll
import './style.scss';
// import * as Scroll from 'react-scroll';
// import { Link as LScrol } from 'react-scroll';

import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { HashLink } from 'react-router-hash-link';
import scrollToElement from 'scroll-to-element';

const Topo = () => {
  // const scrollWithOffset = (el: any) => {
  //   const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  //   const yOffset = 0;
  //   window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  // };

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

  // const scroll = Scroll.animateScroll;

  return (
    <>
      <HashLink
        className={`${
          scrollPosition === 0 && 'd-none'
        } fas fa-chevron-circle-up scrolling-top fa-2x text-primary`}
        to="/#root"
        style={{ zIndex: 9999, textDecoration: 'none' }}></HashLink>

      <header
        className={`${addAbsolue === '' ? 'fixed-top' : 'bg-white'} ${
          scrollPosition > 0 && addAbsolue === '' && 'set-scrol'
        }`}>
        <div className="dropdown px-3 py-2 d-block d-sm-none">
          <div className="row">
            <div className="col col-4">
              <button
                className="btn btn-secondary"
                type="button"
                id="dropdownMenu2"
                data-bs-toggle="dropdown"
                aria-expanded="false">
                <i className="fas fa-bars"></i>
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                <li>
                  <HashLink
                    className="dropdown-item"
                    type="button"
                    to="#quem_somos"
                    onClick={() =>
                      scrollToElement('#quem_somos', {
                        offset: 0,
                        duration: 1500
                      })
                    }>
                    Quem Somos
                  </HashLink>
                </li>
                <li>
                  <HashLink className="dropdown-item" type="button" to="servicos" smooth={true}>
                    Serviços
                  </HashLink>
                </li>
                <li>
                  <Link to="/nossa-equipe" className="dropdown-item">
                    <span>Nossa Equipe</span>
                  </Link>
                </li>
                <li>
                  <Link to="/nossa-equipe" className="dropdown-item">
                    <span>Nossa Equipe</span>
                  </Link>
                </li>
                <li>
                  <HashLink
                    className="dropdown-item"
                    type="button"
                    to="/#contato"
                    onClick={() =>
                      scrollToElement('#contato', {
                        offset: 0,
                        duration: 1500
                      })
                    }>
                    Contato
                  </HashLink>
                </li>
              </ul>
            </div>
            <div className="col col-4 text-center">
              <Link to="/" className="navbar-brand">
                <img
                  src="logo-mobile.png"
                  alt="Instituto Yofi"
                  className="img-fluid"
                  style={{ width: '55px' }}
                />
              </Link>
            </div>
            <div className="col col-4"></div>
          </div>
        </div>
        <div className="container d-none d-sm-block p-3 px-0">
          <div className="row align-items-center justify-content-between">
            <div className="col col-md-2">
              <Link to="/">
                <img src="logo.png" loading="lazy" alt="" className="img-fluid" />
              </Link>
            </div>
            <div className="col col-md-7">
              <nav className="d-flex align-items-center text-uppercase">
                <>
                  <span className="flex-fill flip">
                    <HashLink
                      to="/#quem_somos"
                      onClick={() =>
                        scrollToElement('#quem_somos', {
                          offset: 0,
                          duration: 1500
                        })
                      }>
                      <span>quem somos</span>
                      <span>quem somos</span>
                    </HashLink>
                  </span>
                  <span className="flex-fill flip">
                    <HashLink
                      to="#/nossas_unidades"
                      onClick={() =>
                        scrollToElement('#nossas_unidades', {
                          offset: 0,
                          duration: 1500
                        })
                      }>
                      <span>unidades</span>
                      <span>unidades</span>
                    </HashLink>
                  </span>
                  <span className="flex-fill flip">
                    <HashLink
                      to="/#servicos"
                      onClick={() =>
                        scrollToElement('#servicos', {
                          offset: 0,
                          duration: 1500
                        })
                      }>
                      <span>serviços</span>
                      <span>serviços</span>
                    </HashLink>
                  </span>
                  <span className="flex-fill flip">
                    <Link to="/nossa-equipe">
                      <span>equipe</span>
                      <span>equipe</span>
                    </Link>
                  </span>
                  <span className="flex-fill flip">
                    <HashLink
                      to="#contato"
                      onClick={() =>
                        scrollToElement('#contato', {
                          offset: 0,
                          duration: 1500
                        })
                      }>
                      <span>contato</span>
                      <span>contato</span>
                    </HashLink>
                  </span>
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
