import './style.scss';
import { Link as LScrol } from 'react-scroll';

import { Link, useLocation } from 'react-router-dom';

const Topo = () => {
  const { pathname } = useLocation();

  const addAbsolue = pathname.split('/')[1];

  const handleSetActive = (e: any) => {
    console.log(e);
  };

  return (
    <header className={`p-3 px-0 header ${addAbsolue === '' ? 'fixed-top' : 'bg-white'}`}>
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col col-md-2">
            <Link to="/">
              <img src="logo.png" loading="lazy" alt="" className="img-fluid" />
            </Link>
          </div>
          <div className="col col-md-7">
            <nav className="d-flex align-items-center text-uppercase">
              <span className="flex-fill flip">
                <LScrol
                  onSetActive={handleSetActive}
                  activeClass="active"
                  to="quem_somos"
                  spy={true}
                  smooth={true}
                  offset={-150}
                  duration={500}>
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
                  offset={-150}
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
                <a href="">
                  <span>contato</span>
                  <span>contato</span>
                </a>
              </span>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topo;
