import React,{useContext} from 'react'
import {ThemeContext} from '../Context/ThemeContext'
import '../css/Competences.css'

export default function Competences() {
     //Recuperer le thème depuis context
     const  {theme} = useContext(ThemeContext)

    return (
        <div className={theme ? " competences colorPrimaryDark center" : "competences center" }>
            <h1 className="title">Mes Compétences</h1>
        </div>
    )
}
