import './css/App.css'
import NavBar from './components/NavBar'
import ThemeContextProvider from './Context/ThemeContext'
import Acceuil from './components/Acceuil'


function App() {
  //Recuperer le thème depuis context
  

  return (
    <div className="App" >
      <ThemeContextProvider>
        <NavBar></NavBar>
        <Acceuil></Acceuil>        
      </ThemeContextProvider>    
    </div>
  );
}

export default App;
