import React from 'react'
import '../css/Acceuil.css'
import MaPhoto from '../Media/MaPhoto.jpeg'

export default function Acceuil() {
    return (
        <div className="Acceuil">
            <div className="UsrImgContainer center">
                <img className="UsrImg" src={MaPhoto} alt="logo"></img>
            </div>

            <div className="Info">BALLO Prince Nick</div>
            <div className="ForTitre">20 ans</div>
            
            <div className="UserInfo">
                
                <div className="Info UserName">
                    <div className="Titre Email">Email</div>
                    <div className="ForTitre">princenickballo@gmail.com</div>
                </div>
                <div className="Info UserName">
                    <div className="Titre LinkedIn">LinkedIn</div>
                    <div className="ForTitre"><a href="https://www.linkedin.com/in/prince-nick-ballo/">Redirection vers LinkedIn</a></div>
                </div>
                <div className="Info UserName">
                    <div className="Titre Adress">Adresse</div>
                    <div className="ForTitre">100 rue Diderot 62100 Calais</div>
                </div>
                <div className="Info UserName">
                    <div className="Titre Tel">Tel</div>
                    <div className="ForTitre">07 54 50 96 49</div>
                </div>
        
            </div>
        </div>
    )
}
