import './css/App.css'
import { BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import NavBar from './components/NavBar'
import ThemeContextProvider from './Context/ThemeContext'
import Acceuil from './components/Acceuil'
import CentreInteret from './components/CentreInteret'
import Certifications from './components/Certifications'
import Competences from './components/Competences'
import Formation from './components/Formation'
import Langues from './components/Langues'


function App() {
  //Recuperer le thème depuis context
  

  return (
    <div className="App" >
      <ThemeContextProvider>
       
        <Router>
          <NavBar/>
          <Switch>
              <Route exact path="/" component={Acceuil}/>
              <Route exact path="/Formation" component={Formation}/>
              <Route exact path="/CentreInteret" component={CentreInteret}/>
              <Route exact path="/Certifications" component={Certifications}/>
              <Route exact path="/Competences" component={Competences}/>
              <Route exact path="/Langues" component={Langues}/>
          </Switch>
         
        </Router>
        
              
      </ThemeContextProvider>    
    </div>
  );
}

export default App;
