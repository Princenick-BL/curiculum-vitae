import React, { Component } from 'react'
import '../css/FormationInfo.css'

export default class FormationInfo extends Component {
    render() {
        /*
            Classe Name explication


        
        */

        
        

        return (
            
            <div className="FIF flexV">

                <div className="flexH ">
                    <div className="periodeContainer center">
                        <div className="periode center">{this.props.periode}</div>
                    </div>
                    <div className="textContainer center">
                        <div className="text">{this.props.ecole}</div>
                    </div>
                </div>

                <div className="flexH ml">
                     <div className="flexV">
                            {
                            Object.entries(JSON.parse(this.props.annee)[0]).map((value, index) => {
                               
                                return (
                                    <div className="flexH m5 ml10" key={index}>
                                        <div className="flexV">
                                            <div className="flexV center">
                                                <div className="dot1"></div>                                    
                                            </div>
                                            <div className="line"></div>
                                        </div>
                                        
                                        <div className="text">{Object.entries(value)[1][1].nom+ " : " +Object.entries(value)[1][1].desc}</div>
                                    </div>
                                )
                            })
                                
                            }                              
                       
                        </div>
                   
                </div>
                
            </div>
        )
    }
}
