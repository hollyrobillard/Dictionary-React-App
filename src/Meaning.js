import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css"

export default function Meaning(props) {
    console.log(props.meaning);
    return (
        <div className="Meaning">
            <h3>{props.meaning.partOfSpeech}</h3>
            {props.meaning.definitions.map((definition, index) => {
                return (
                    <div key={index} className="definition">
                        <strong>Definition:</strong> {definition.definition}
                        <br />
                        <em>{definition.example}</em>
                        <br />
                        <Synonyms synonyms={definition.synonyms} />
                    </div>
                );
            })}
        </div>
    );
}