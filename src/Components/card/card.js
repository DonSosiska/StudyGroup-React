import React from "react";
import Spoiler from "../spoiler/spoiler.js";
import "./card.css";
import data from "./data.js";
import girlPicture from "./illustration-woman-online-desktop.svg";
import bgPicture from "./bg-pattern-desktop.svg";
import cubePicture from "./illustration-box-desktop.svg";

const Card = () => {
    const elements = data.map( (item) => {
        if ( typeof item === 'object' && isEmpty(item) ){ 
            return (
                <Spoiler {...item}/>
            )
        }
    })

    function isEmpty(obj) {
        for(let key in obj)
        {
            return true;
        }
        return false;
    }
    return (
        <div className="card">
            <img className="cube-picture" src={cubePicture}/>
            <div className="card-body">
                <img className="girl-picture" src={girlPicture}/>
                <img className="bg-picture" src={bgPicture}/>
                <ul className="spoliers-list"><h1>FAQ</h1> {elements}</ul>
            </div>
        </div>
    )
  }

export default Card;