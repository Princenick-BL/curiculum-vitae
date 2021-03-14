import React,{useContext} from 'react'
import {ThemeContext} from '../Context/ThemeContext'
import '../css/Langues.css'

export default function Langues() {
     //Recuperer le thème depuis context
     const  {theme} = useContext(ThemeContext)

    return (
        <div className={theme ? " langues colorPrimaryDark center" : "langues center" }>
            <h1 className="title">Langues</h1>
        </div>
    )
}
