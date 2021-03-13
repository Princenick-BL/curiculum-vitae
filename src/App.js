import './css/App.css'
import NavBar from './components/NavBar'
import Section from './components/Section'
import ThemeContextProvider from './Context/ThemeContext'
import Acceuil from './components/Acceuil'



function App() {
  return (
    <div className="App darkbody">
      <ThemeContextProvider>
        <NavBar></NavBar>
        <div className="AppBody">
          <Acceuil></Acceuil>
        </div>
      </ThemeContextProvider>    
    </div>
  );
}

export default App;
