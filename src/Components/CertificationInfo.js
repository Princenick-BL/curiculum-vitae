import React, { Component } from 'react'
import {ThemeContext} from '../Context/ThemeContext'
import '../css/CertificationInfo.css'

export default class CertificationInfo extends Component {


    render() {
        return (
            <div className={this.props.theme ? "CertificationInfo Cdark flexV" : "CertificationInfo Clight flexV" }>
                <div className="Ctitre">{this.props.titre}</div>
                <div className="Cecole-Annee">{this.props.ecole + " : "+ this.props.annee}</div>
                <a className="Clien" href={this.props.lien}>Lien vers la certification</a>
            </div>
        )
    }
}
