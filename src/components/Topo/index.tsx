import './style.scss';

import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { HashLink } from 'react-router-hash-link';
import scrollToElement from 'scroll-to-element';

import LogoYofi from './logo-svg.svg';

const Topo = () => {
  const { pathname, hash } = useLocation();

  const addAbsolue = pathname.split('/')[1];

  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
    console.log(hash);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Link
        to={'/'}
        className={`${
          scrollPosition === 0 && 'd-none'
        } fas fa-chevron-circle-up scrolling-top fa-2x text-primary`}
        onClick={() =>
          scrollToElement('#root', {
            offset: 0,
            duration: 1500
          })
        }
        style={{ zIndex: 9999, textDecoration: 'none', cursor: 'pointer' }}></Link>

      <header
        className={`${addAbsolue === '' ? 'fixed-top' : 'bg-white'} ${
          scrollPosition > 0 && addAbsolue === '' && 'set-scrol'
        }`}>
        {/* menus for mobile */}
        <div className="dropdown px-3 py-3 d-block d-sm-none">
          <div className="row">
            <div className="col col-4">
              <button
                className="btn btn-secondary"
                type="button"
                id="dropdownMenu2"
                data-bs-toggle="dropdown"
                aria-expanded="false">
                <i className="fas fa-bars" style={{ fontSize: 22 }}></i>
              </button>
              <ul className="dropdown-menu personalize" aria-labelledby="dropdownMenu2">
                <li>
                  <HashLink
                    type="button"
                    className="dropdown-item"
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
                  <HashLink
                    type="button"
                    className="dropdown-item"
                    to="#/nossas_unidades"
                    onClick={() =>
                      scrollToElement('#nossas_unidades', {
                        offset: 0,
                        duration: 1500
                      })
                    }>
                    Unidades
                  </HashLink>
                </li>
                <li>
                  <HashLink
                    className="dropdown-item"
                    type="button"
                    to="/#servicos"
                    onClick={() =>
                      scrollToElement('#servicos', {
                        offset: 0,
                        duration: 1500
                      })
                    }>
                    Servi??os
                  </HashLink>
                </li>
                <li>
                  <Link
                    to="/nossa-equipe"
                    className="dropdown-item"
                    onClick={() =>
                      scrollToElement('#root', {
                        offset: 0,
                        duration: 1500
                      })
                    }>
                    Nossa Equipe
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

        {/* menus for desktop */}
        <div className="container d-none d-sm-block p-3 px-0">
          <div className="row align-items-center justify-content-between">
            <div className="col col-md-3">
              <Link to="/">
                <img src={LogoYofi} alt="Instituto Yofi" className="img-fluid" />
              </Link>
            </div>
            <div className="col col-md-7">
              <nav className="d-flex align-items-center text-uppercase">
                <span
                  className={`flex-fill flip ${hash === '#quem_somos' && 'active'} `}
                  onClick={() =>
                    scrollToElement('#quem_somos', {
                      offset: 0,
                      duration: 1500
                    })
                  }>
                  <HashLink to="/#quem_somos">
                    <span>quem somos</span>
                    <span>quem somos</span>
                  </HashLink>
                </span>
                <span
                  className={`flex-fill flip ${hash === '#nossas_unidades' && 'active'} `}
                  onClick={() =>
                    scrollToElement('#nossas_unidades', {
                      offset: 0,
                      duration: 1500
                    })
                  }>
                  <HashLink to="/#nossas_unidades">
                    <span>unidades</span>
                    <span>unidades</span>
                  </HashLink>
                </span>
                <span
                  className={`flex-fill flip ${hash === '#servicos' && 'active'} `}
                  onClick={() =>
                    scrollToElement('#servicos', {
                      offset: 0,
                      duration: 1500
                    })
                  }>
                  <HashLink to="/#servicos">
                    <span>servi??os</span>
                    <span>servi??os</span>
                  </HashLink>
                </span>
                <span
                  className={`flex-fill flip ${hash === '#root' && 'active'} `}
                  onClick={() =>
                    scrollToElement('#root', {
                      offset: 0,
                      duration: 1500
                    })
                  }>
                  <Link to="/nossa-equipe">
                    <span>equipe</span>
                    <span>equipe</span>
                  </Link>
                </span>
                <span
                  className={`flex-fill flip ${hash === '#contato' && 'active'} `}
                  onClick={() =>
                    scrollToElement('#contato', {
                      offset: 0,
                      duration: 1500
                    })
                  }>
                  <HashLink to="/#contato">
                    <span>contato</span>
                    <span>contato</span>
                  </HashLink>
                </span>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Topo;
