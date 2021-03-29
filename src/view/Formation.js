import React,{useContext} from 'react'
import {ThemeContext} from '../Context/ThemeContext'
import '../css/Formation.css'
import FormationInfo from '../Components/FormationInfo'

export default function Formation() {
     //Recuperer le thème depuis context
     const  {theme} = useContext(ThemeContext)

    return (
        <div className={theme ? " formation colorPrimaryDark flexV" : "formation flexV" }>
            
            <h1 className="title">Formation</h1>
            <div className="formationInfoContainer">
                <FormationInfo
                    periode="2019 2022"
                    ecole="Ecole d'Ingénieur du Littoral Cote d'Opale ( EILCO ) Calais / France"
                    annee = {JSON.stringify(
                        [{
                            "1":{
                                "nom":"ING1",
                                "desc":"Première année de cycle d'ingénieur informatique"
                            },
                            "2":{
                                "nom":"ING2",
                                "desc":"Deuxième année de cycle d'ingénieur informatique"
                            }
                        }]
                    )}/>

                <FormationInfo
                    periode="2017 2019"
                    ecole="Institut Nationnal Supérieur des classes Préparatoires aux Etudes d'Ingénieur ( INSPEI ) Abomey/Benin"
                    annee = {JSON.stringify(
                        [{
                            "1":{
                                "nom":"CP1",
                                "desc":"Première année de classes préparatoires aux grandes écoles"
                            },
                            "2":{
                                "nom":"CP2",
                                "desc":"Première année de classes préparatoires aux grandes écoles"
                            }
                        }]
                    )}/>   

                    <FormationInfo
                    periode="2017"
                    ecole="Collège d'enseignement Général d'Aplahoué Aplahoué/Benin"
                    annee = {JSON.stringify(
                        [{
                            "1":{
                                "nom":"BAC C",
                                "desc":"Baccalauréat scientifique option mathématiques et physiques"
                            }
                            
                        }]
                    )}/>     

            </div>

                        
        </div>
    )
}
