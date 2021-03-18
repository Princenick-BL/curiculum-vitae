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
                    <div className="dot1"></div>
                    <div className="text">{this.props.periode}</div>
                </div>

                <div className="flexH">

                    <div className="line"></div>

                    <div className="flexV m10">

                        <div className="flexH ">
                            <div className="dot2"></div>
                            <div className="text">{this.props.ecole}</div>
                        </div>

                        <div className="flexV m10 ml10">
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
                
            </div>
        )
    }
}
