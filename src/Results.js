import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";

import "./Results.css";

export default function Results(props) {
    if (props.results) {
        return(
            <div className="Results text-left">
                <h1 className="word">
                    {props.results.word.toUpperCase()}
                </h1>
                <Phonetics phonetics={props.results.phonetics} />
                {props.results.meanings.map((meaning, index) => {
                    return (
                        <div key={index}>
                            <Meaning meaning={meaning}/>
                        </div>
                    );
                })}
            </div>
        );
    } else {
        return(
            <div className="Results text-left">
                <h1 className="word d-none">
                    {props.defaultWord.toUpperCase()}
                </h1>
            </div>
        );
    }
}