import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Site from './Site'
import Rodape from './componentes/Rodape'
import Cabecalho from './componentes/Cabecalho'
import Inicio from './componentes/Inicio'
import Servico from './componentes/Servico'
import Portfolio from './componentes/Portfolio'
import Precos from './componentes/Precos'
import Contato from './componentes/Contato'

//Área administrativa
import Admin from './admin/Admin'
import Login from './admin/Login'

export default (props) => { 
  return (
    <BrowserRouter>
    <div className="App">
     <Cabecalho />

     <Route path='/' exact component={Inicio} />
     <Route path='/servico' component={Servico} />
     <Route path='/portfolio' component={Portfolio} />
     <Route path='/precos' component={Precos} />
     <Route path='/contato' component={Contato} />

     <Route path='/admin' component={Admin} />
     <Route path='/login' component={Login} />

     <Rodape />
    </div>
  </BrowserRouter>
  );
}