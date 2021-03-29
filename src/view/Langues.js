import React,{useContext} from 'react'
import {ThemeContext} from '../Context/ThemeContext'
import '../css/Langues.css'
import CompetancesInfo from '../Components/CompetancesInfo'

export default function Langues() {
     //Recuperer le thème depuis context
     const  {theme} = useContext(ThemeContext)

    return (
        <div className={theme ? " langues colorPrimaryDark flexV" : "langues flexV" }>
            <h1 className="title">Langues</h1>
            <fieldset className={theme ?" Comdark " : " Comlight "}>
                    <legend className="legend">Langues</legend>
                    <div className="flexW">

                        <CompetancesInfo
                            theme={theme}
                            competences="Aglais niveau B2"
                        />
                        <CompetancesInfo
                            theme={theme}
                            competences="Français langue maternelle"
                        />
                        <CompetancesInfo
                            theme={theme}
                            competences="Espagnole niveau scolaire"
                        />                   
                    
                    </div>
           
                </fieldset>
        </div>
    )
}
