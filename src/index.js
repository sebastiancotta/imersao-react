import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/home';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import CadastroVideo from './pages/cadastro/video';

// Colocar um jogo nessa página: https://www.youtube.com/watch?v=jOAU81jdi-c :)
const Pagina404 = () => (<div>Página 404</div>)

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={App} exact />        
        <Route path="/cadastro/video" component={ CadastroVideo } /> 
        <Route component={Pagina404} />  
      </Switch>
    </BrowserRouter>  
  </React.StrictMode>,
  document.getElementById('root')
);

