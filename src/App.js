import logo from "./logo.svg";
import "./App.css";
import Navi from "./layouts/Navi";
import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react';
import Footer from './layouts/Footer';
import {Switch,Route} from 'react-router-dom';
import Dashboard from './layouts/Dashboard';
import { routes } from './routing';


function App() {
  return (
    <div className="App">
       <Navi/>
    <Container>
    <Switch>
        {routes.map((route) => (
         
          <Route exact={route.exact} path={route.path} key={route.title}> <Dashboard> {route.component} </Dashboard> </Route>
        ))}
      </Switch>
      </Container>
    <Footer></Footer>
    </div>
  );
}

export default App;
