import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Navbar } from './components/Navbar';
import { CarsHomePage } from './components/pages/CarsHomePage';
import { ShoppingCartPage } from './components/pages/ShoppingCartPage';
import {CarsDetailsPage} from  './components/pages/CarsDetailsPage';
import {LoginPage} from './components/pages/LoginPage'
import {NewCarPage} from './components/pages/NewCarPage/index';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <CarsHomePage />
        </Route>
        <Route path="/cart">
           <ShoppingCartPage />
        </Route>
        <Route path="/login">
          <LoginPage/>
        </Route>
        <Route path="/Car/:id">
           <CarsDetailsPage />        
        </Route>
        <Route path="/NewPetPage">
          <NewCarPage/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;