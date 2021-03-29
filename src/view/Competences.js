import React,{useContext} from 'react'
import {ThemeContext} from '../Context/ThemeContext'
import '../css/Competences.css'
import CompetancesInfo from '../Components/CompetancesInfo'

export default function Competences() {
     //Recuperer le thème depuis context
     const  {theme} = useContext(ThemeContext)

    return (
        
        <div className={theme ? " competences colorPrimaryDark flexV" : "competences flexV" }>
            <h1 className="title">Mes Compétences</h1>
            <div className="competenceinfoContainer">
            <fieldset className={theme ?" Comdark " : " Comlight "}>
                    <legend className="legend">Librairies et Frameworks</legend>
                    <div className="flexW">

                        <CompetancesInfo
                            theme={theme}
                            competences="React.js"
                        />
                        <CompetancesInfo
                            theme={theme}
                            competences=" Node.js"
                        />
                        <CompetancesInfo
                            theme={theme}
                            competences="Express.js"
                        />                   
                    
                    </div>
           
                </fieldset>
                <fieldset className={theme ?" Comdark " : " Comlight "}>
                <legend className="legend">Langages de programmation</legend>
                <div className="flexW">               
                
                    <CompetancesInfo
                        theme={theme}
                        competences="HTML5"
                    />
                    <CompetancesInfo
                        theme={theme}
                        competences="CSS3"
                    />
                    <CompetancesInfo
                        theme={theme}
                        competences="JavaScript"
                    />
                    <CompetancesInfo
                        theme={theme}
                        competences="TypeScript"
                    />
                    <CompetancesInfo
                        theme={theme}
                        competences="PHP"
                    />
                    <CompetancesInfo
                        theme={theme}
                        competences="Ajax"
                    />
                    <CompetancesInfo
                        theme={theme}
                        competences="JQuery"
                    />
                    <CompetancesInfo
                        theme={theme}
                        competences="Wordpress"
                    />
                    <CompetancesInfo
                        theme={theme}
                        competences="MySql"
                    />

                    <CompetancesInfo
                        theme={theme}
                        competences="PL / Sql"
                    />
                    
                    <CompetancesInfo
                        theme={theme}
                        competences="Java"
                    />
                    <CompetancesInfo
                        theme={theme}
                        competences="JavaFx"
                    />
                    <CompetancesInfo
                        theme={theme}
                        competences="Python"
                    />
                    <CompetancesInfo
                        theme={theme}
                        competences="C"
                    />
                    <CompetancesInfo
                        theme={theme}
                        competences="VB"
                    />
                    
                    
                    </div>
            
                </fieldset>
                <fieldset className={theme ?" Comdark " : " Comlight "}>
                    <legend className="legend">IDE</legend>
                    <div className="flexW">

                        <CompetancesInfo
                            theme={theme}
                            competences="Visual Studio Code"
                        />
                        <CompetancesInfo
                            theme={theme}
                            competences="IntelliJ"
                        />
                        <CompetancesInfo
                            theme={theme}
                            competences="Sublime Text"
                        />                   
                    
                    </div>
           
                </fieldset>
                <fieldset className={theme ?" Comdark " : " Comlight "}>
                    <legend className="legend">Bases de données</legend>
                    <div className="flexW">

                        <CompetancesInfo
                            theme={theme}
                            competences="ORACLE"
                        />
                        <CompetancesInfo
                            theme={theme}
                            competences="MySql"
                        />
                        <CompetancesInfo
                            theme={theme}
                            competences="IBM"
                        />  
                        <CompetancesInfo
                            theme={theme}
                            competences="Mongodb"
                        />                 
                        <CompetancesInfo
                            theme={theme}
                            competences="Mariadb"
                        />
                    </div>
           
                </fieldset>
                <fieldset className={theme ?" Comdark " : " Comlight "}>
                    <legend className="legend">Systèmes d'exploitation</legend>
                    <div className="flexW">

                        <CompetancesInfo
                            theme={theme}
                            competences="Windows"
                        />
                        <CompetancesInfo
                            theme={theme}
                            competences="Linux"
                        />
                                        
                    
                    </div>
           
                </fieldset>
            </div>

        </div>
    )
}
