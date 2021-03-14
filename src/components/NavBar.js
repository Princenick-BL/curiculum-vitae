import React ,{ useState,useEffect,useContext} from 'react'
import '../css/NavBar.css'
import {Link} from 'react-router-dom'
import {ThemeContext} from '../Context/ThemeContext'

export default function NavBar() {
    //Recuperer le thème depuis context
    const  {toggleTheme,theme} = useContext(ThemeContext)
    //verifier la largeur de la vue
    const [largeur,setLargeur]=useState(window.innerWidth);
    const [toggleMenu,setToggleMenu]=useState(false);

    const ShowHideMenu =() =>{
        setToggleMenu(!toggleMenu);
    };

    useEffect(()=>{

        const changeWidth =()=>{

            setLargeur(window.innerWidth);

            if(window.innerWidth > 500){
                setToggleMenu(false);
            }
        }
        window.addEventListener('resize',changeWidth);
        return()=>{
            window.removeEventListner('resize',changeWidth);
        }
    },[])
    return (
        <div className={theme ? "Menu colorSecondaryDark" : "Menu MenuLight"}>

            {/*-------------- 3  barres du Menu -------------*/}
            <div className="head center">
                <div className="nav-btn" onClick={ShowHideMenu}>
                    <div className="nav-btn-span"></div>
                    <div className="nav-btn-span"></div>
                    <div className="nav-btn-span"></div>
                </div>
                <div className="toggleDarkLight" onClick={toggleTheme}>
                    <div  alt="mode" className={!theme ? "modeImg clickLight " : "modeImg clickDark "}></div>
                </div>
            </div>




            {/*-------------- Les options du menu -------------*/}
            <nav className="center-children">
                {(largeur>500 || toggleMenu)&&(

                    <div className="items-liste center-children">
                        <div className="item center-children">
                            <Link to="/" className="link" onClick={ShowHideMenu}>Acceuil</Link>
                        </div>
                        <div className="item center-children">
                            <Link to="/Formation" className="link" onClick={ShowHideMenu}>Formation</Link>
                        </div>
                        <div className="item center-children">
                            <Link to="/Certifications" className="link" onClick={ShowHideMenu}>Certifications</Link>
                        </div>
                        <div className="item center-children">
                            <Link to="/Competences" className="link" onClick={ShowHideMenu}>Competences</Link>
                        </div>
                        <div className="item center-children">
                            <Link to="/Langues" className="link" onClick={ShowHideMenu}>Langues</Link>
                        </div>
                        <div className="item center-children">
                            <Link to="/CentreInteret" className="link" onClick={ShowHideMenu}>Centres d'intérêt</Link>
                        </div>
                    </div>
                )}


            </nav>


        </div>


    )
}
