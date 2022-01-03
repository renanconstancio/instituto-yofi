import './style.scss';

const Rodape = () => {
  return (
    <footer className="border-top">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-3 text-md-start text-center p-3">
            <img
              src="/logo-fff.png"
              alt="Logo"
              className="img-fluid"
              style={{
                width: 175
              }}
            />
          </div>

          <div className="col-12 col-md-9 text-md-start text-center">
            <small className="d-block mt-2 p-1 h6">
              Yofi Itápolis (16) 3262-1840 - Av. Francico Porto, 1146 - Centro, Itápolis - SP, 14900-000
            </small>

            <small className="d-block mt-2 p-1 h6">
              Yofi - Ibitinga (16) 3342-2810 - Av. Sete de Setembro, 760 - Centro, Ibitinga - SP,
              14940-000
            </small>

            <a
              href="https://www.facebook.com/institutoyofi"
              target="_blank"
              className="d-flex float-start align-items-center text-uppercase mb-2 text-decoration-none"
              rel="noopener noreferrer">
              <i className="fab fa-facebook fa-2x me-2"></i>
              <span>facebook</span>
            </a>

            <a
              href="https://www.instagram.com/institutoyofi/"
              target="_blank"
              className="d-flex ms-3 float-start align-items-center text-uppercase text-decoration-none"
              rel="noopener noreferrer">
              <i className="fab fa-instagram fa-2x me-2"></i>
              <span>instagram</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Rodape;
