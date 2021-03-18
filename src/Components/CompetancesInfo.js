import React, { Component } from 'react'
import '../css/CompetenceInfo.css'

export default class CompetancesInfo extends Component {
    render() {
        return (
            <div className={this.props.theme ? "CompetenceInfo Comdark flexV" : "CompetenceInfo Comlight flexV" }>
                <div className="Comtitre">{this.props.competences}</div>
            </div>
        )
    }
}
