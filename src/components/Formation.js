import React,{useContext} from 'react'
import {ThemeContext} from '../Context/ThemeContext'
import '../css/Formation.css'

export default function Formation() {
     //Recuperer le thème depuis context
     const  {theme} = useContext(ThemeContext)

    return (
        <div className={theme ? " formation colorPrimaryDark flexV" : "formation flexV" }>
            <h1 className="title">Formation</h1>
        </div>
    )
}
