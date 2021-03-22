import React from "react";

const Inicio = (props) => {
  return (
    <div>
      {/* Container (About Section) */}
      <div id="about" className="container-fluid">
        <div className="row">
          <div className="col-sm-8">
            <h2>Sobre nós</h2>
            <br />
            <h4>
              Decorcid Persianas e Cortinas
              <p>Somos uma empresa especializada em cortinas e persianas de todos
              os tipos e modelos, temos também funcionários capacitados para
              atender os mais exigentes clientes, atendimento personalizado,
              entre em contato e surpreenda-se.</p> Rede de proteção, Persianas,
              Cortinas, Telas mosqueteiras, Toldos, Cercas de piscina.
            </h4>
            <br />
            <br />
            <button className="btn btn-default btn-lg">Get in Touch</button>
          </div>
          <div className="col-sm-4">
            <span className="glyphicon glyphicon-signal logo" />
          </div>
        </div>
      </div>
      <div className="container-fluid bg-grey">
        <div className="row">
          <div className="col-sm-4">
            <span className="glyphicon glyphicon-globe logo " />
          </div>
          <div className="col-sm-8">
            <h2>Our Values</h2>
            <br />
            <h4>
              <strong>MISSION:</strong> Our mission lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </h4>
            <br />
            <p>
              <strong>VISION:</strong> Our vision Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
