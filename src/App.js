import './App.css';

import {BrowserRouter, Route, NavLink} from 'react-router-dom';

import Accueil from './views/Accueil';
import Recherche from './views/Recherche';
import Favoris from './views/Favoris';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <NavLink to="/" exact>Accueil</NavLink>
          <NavLink to="/recherche" exact>Recherche</NavLink>
          <NavLink to="/favoris" exact>Favoris</NavLink>
        </header>


        <Route path="/" component={Accueil} exact />
        <Route path="/recherche" component={Recherche} />
        <Route path="/favoris" component={Favoris} />

      </div>
    </BrowserRouter>





  );
}

export default App;
