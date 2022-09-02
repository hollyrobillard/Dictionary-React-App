import React from "react";
import "./Meaning.css"

export default function Meaning(props) {
    console.log(props.meaning);
    return (
        <div className="Meaning">
            <h3>{props.meaning.partOfSpeech}</h3>
            {props.meaning.definitions.map((definition, index) => {
                return (
                    <div key={index} className="definition">
                        {definition.definition}
                        <br />
                        <em>{definition.example}</em>
                    </div>
                );
            })}
        </div>
    );
}