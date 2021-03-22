import React from 'react'

const Contato = props =>{
    return(
        <div>
            <div id="contact" className="container-fluid bg-grey">
          <h2 className="text-center">CONTACT</h2>
          <div className="row">
            <div className="col-sm-5">
              <p>Nos contate e retornaremos em até 24 horas.</p>
              <p><span className="glyphicon glyphicon-map-marker" /> São Carlos, SP</p>
              <p><span className="glyphicon glyphicon-phone" /> (16) 3372-6434</p>
              <p><span className="glyphicon glyphicon-envelope" /> decorcidpersianas@yahoo.com.br</p>
            </div>
            <div className="col-sm-7 ">
              <div className="row">
                <div className="col-sm-6 form-group">
                  <input className="form-control" id="name" name="name" placeholder="Nome Completo" type="text" required />
                </div>
                <div className="col-sm-6 form-group">
                  <input className="form-control" id="email" name="email" placeholder="Email" type="email" required />
                </div>
              </div>
              <textarea className="form-control" id="comments" name="comments" placeholder="Uma breve descrição do orçamento..." rows={5} defaultValue={""} /><br />
              <div className="row">
                <div className="col-sm-12 form-group">
                  <button className="btn btn-default pull-right" type="submit">Send</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    )
}

export default Contato