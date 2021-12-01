import React from 'react';
import TranslateButton from './components/traslateButton';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route,Redirect } from 'react-router-dom';
import About from './pages/about';
import Home from './pages';
import Contact from './pages/contact';
import Resume from './pages/resume';
import Portfolio from './pages/portfolio';
import Footer from './components/Footer'


function App() {
   
  return (

         <div className="page-contanier">
         <div className="page-wrap">
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact  component={About} />
        <Route path='/about' exact component={About} /> 
        <Route path='/portfolio'exact component={Portfolio} />
        <Route path='/contact'exact component={Contact} />
        <Route path='/resume'exact component={Resume} />
        <Redirect to="/"/>
      </Switch>
    </Router>
     </div>
    <Footer/>
   </div>
  );
}
  

export default App;
