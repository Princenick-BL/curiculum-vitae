import React,{useContext} from 'react'
import {ThemeContext} from '../Context/ThemeContext'
import '../css/Certifications.css'
import CertificationInfo from '../Components/CertificationInfo'
import certi1 from '../Media/certif1.png'
import certi2 from '../Media/certif2.png'

export default function Certifications() {
     //Recuperer le thème depuis context
     const  {theme} = useContext(ThemeContext)

    return (
        <div className={theme ? " certifications colorPrimaryDark flexV" : "certifications flexV" }>
            <h1 className="title">Mes Certifications</h1>
            
            <CertificationInfo
                img={certi1}
                titre="React de A à Z ( React Hooks inclus )"
                ecole="Udemy"
                annee="Fevrier 2021"
                lien="http://ude.my/UC-0847f41b-7c3b-437b-9c37-cf7c8b306bf0"
                theme={theme}
            />
            
             <CertificationInfo
                img={certi2}
                titre="Databases and SQL for Data Science"
                ecole="Coursera"
                annee="Fevrier 2021"
                lien="http://coursera.org/verify/6BSFZVLQZZXV"
                theme={theme}
            />
                
        </div>
    )
}
