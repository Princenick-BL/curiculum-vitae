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
        
            <CompetancesInfo
                theme={theme}
                competences="React.js | Node.js | Express.js | Mongodb"
            />
             <CompetancesInfo
                theme={theme}
                competences="HTML5 | CSS3 | JavaScript | TypeScript | PHP | Ajax | JQuery  | Wordpress"
            />
            <CompetancesInfo
                theme={theme}
                competences="MySql | Microsoft Access | Maria DB | IBM"
            />
             <CompetancesInfo
                theme={theme}
                competences="Java | JavaFx"
            />
            <CompetancesInfo
                theme={theme}
                competences="Python"
            />
            <CompetancesInfo
                theme={theme}
                competences="Android Studio | Visual Studio Code | Sublime Texte | Matlab"
            />

        </div>
    )
}
