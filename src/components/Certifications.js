import React,{useContext} from 'react'
import {ThemeContext} from '../Context/ThemeContext'
import '../css/Certifications.css'

export default function Certifications() {
     //Recuperer le thème depuis context
     const  {theme} = useContext(ThemeContext)

    return (
        <div className={theme ? " certifications colorPrimaryDark center" : "certifications center" }>
            <h1 className="title">Mes Certifications</h1>
        </div>
    )
}
