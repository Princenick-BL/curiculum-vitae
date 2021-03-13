import React ,{Fragment, useState,useEffect,useContext} from 'react'
import '../css/NavBar.css'
import {ThemeContext} from '../Context/ThemeContext'

export default function NavBar() {
    //Recuperer le thème depuis context
    const {theme}=useContext(ThemeContext);
    //verifier la largeur de la vue
    const [largeur,setLargeur]=useState(window.innerWidth);
    const [toggleMenu,setToggleMenu]=useState(false);

    const showMenu =() =>{
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
        <Fragment>
            <nav className="center-children">
                {(largeur>500 || toggleMenu)&&(

                    <div className="items-liste center-children">
                        <div className="item center-children">Acceuil</div>
                        <div className="item center-children">Formulaire</div> 
                        <div className="item center-children">Contact</div>
                        <div className="item center-children">DarkMode</div>
                    </div>
                )}
                

            </nav>
            <div className="nav-btn" onClick={showMenu}>
                <div className="nav-btn-span"></div>
                <div className="nav-btn-span"></div>
                <div className="nav-btn-span"></div>
            </div>
            <div>{theme}</div> 
        </Fragment>
            
            
    )
}
