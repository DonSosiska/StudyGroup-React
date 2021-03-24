import React, { Component } from "react";
import PropTypes from "prop-types";
import "./spoiler.css";



export default class Spoiler extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const {n, question, answer} = this.props;
        return(
            <li className="spoiler">
                <h2 className="question" onClick={(e)=>{
                    let flag1 = false;
                    let flag2 = false;
                    
                    if (e.currentTarget.classList.contains("focus")){
                        flag1 = true;
                    }
                    let list = e.currentTarget.parentNode.parentNode.querySelectorAll(".focus");
                    list.forEach((item)=>{
                        item.classList.remove("focus");
                    });
                    const el = document.querySelector("#"+n);
                    if (el.classList.contains("show")){
                        flag2 = true;
                    }
                    list = el.parentNode.parentNode.querySelectorAll(".show");
                    list.forEach((item)=>{
                        item.classList.remove("show");
                    });
                    if (!flag1){
                        e.currentTarget.classList.add("focus");
                    }
                    if (!flag2){
                        el.classList.add("show");
                    }
                    }
                }>{question}</h2>
                <h2 className="answer" id={n}>{answer}</h2>
            </li>

        );
    }
}

Spoiler.propTypes = {
    n: PropTypes.string,
    question: PropTypes.string,
    answer: PropTypes.string
};