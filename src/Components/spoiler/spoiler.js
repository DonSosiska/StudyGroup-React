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
                    console.log(e);
                    e.currentTarget.classList.toggle("focus");
                    const el = document.querySelector("#"+n);
                    let flag = false;
                    if (el.classList.contains("show")){
                        flag = true;
                    }
                    const list = el.parentNode.parentNode.querySelectorAll(".show");
                    list.forEach((item)=>{
                        item.classList.remove("show");
                    });
                    if (!flag){
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