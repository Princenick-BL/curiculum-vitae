import React,{useContext} from 'react'
import {ThemeContext} from '../Context/ThemeContext'
import '../css/CentreInteret.css'

export default function CentreInteret() {

     //Recuperer le thème depuis context
     const  {theme} = useContext(ThemeContext)

    return (
        <div className={theme ? " centreInteret colorPrimaryDark flexV" : "centreInteret flexV" } >
            <h1 className="title">Mes Centres d' intérêt</h1>
        </div>
    )
}
