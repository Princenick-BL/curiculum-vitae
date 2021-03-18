import './css/App.css'
import { BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import NavBar from './Components/NavBar'
import ThemeContextProvider from './Context/ThemeContext'
import Acceuil from './view/Acceuil'
import CentreInteret from './view/CentreInteret'
import Certifications from './view/Certifications'
import Competences from './view/Competences'
import Formation from './view/Formation'
import Langues from './view/Langues'


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

              <Route exact path="" component={Acceuil}/>

              {/* <Route component={Acceuil}/> */}
          </Switch>
         
        </Router>
        
              
      </ThemeContextProvider>    
    </div>
  );
}

export default App;
