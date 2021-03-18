import React, { Component } from 'react'
import '../css/CustomAlert.css'

export default class CustomAlert extends Component {

    makeActionYes = ()=>{
        this.props.actionYes()
    }
    makeActionNo = ()=>{
        this.props.actionNo()
    }
    render() {
        return (
            <div className="CustomAlert center">
                <div className="popup center">
                   
                    <div className="alertMessage">{this.props.text}</div>
                    <div className="choixContainer">
                        <div className="choix" onClick={this.makeActionYes}>Oui</div>
                        <div className="choix" onClick={this.makeActionNo}>Non</div>
                    </div>
                </div>           
            </div>
        )
    }
}

