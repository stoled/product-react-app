import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Catalog } from './pages/Catalog';
import { NoMatch } from './pages/NoMatch';
import { Layout } from './components/Layout';
import { NavBar } from './components/NavBar';


function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/catalog" component={Catalog} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </Layout>
    </React.Fragment>
  );
}

export default App;
