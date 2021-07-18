import './App.css';
import {BrowserRouter, Route, NavLink} from 'react-router-dom';

import Accueil from './views/Accueil';
import Recherche from './views/Recherche';
import Checked from './views/Checked';
import Evenement from './views/Evenement';
import Footer from './views/footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <ul>
            <li><NavLink to="/" exact>Accueil</NavLink></li>
            <li><NavLink to="/recherche" exact>Recherche</NavLink></li>
            <li><NavLink to="/checked" exact>Checked</NavLink></li>
          </ul>
        </header>


        <Route path="/" component={Accueil} exact />
        <Route path="/recherche" component={Recherche} />
        <Route path="/checked" component={Checked} />
        <Route path="/evenement/:id" component={Evenement} />
        <Footer />
      </div>
    </BrowserRouter>




  );
}

export default App;
