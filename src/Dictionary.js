import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary(props) {
    const [word, setWord] = useState(props.defaultWord);
    
    function search(event) {
        event.preventDefault();
        alert(`Searching for ${word}`)
    }

    function updateWordChange(event) {
        setWord(event.target.value);
    }
    
    return (
        <div className="Dictionary">
            <h1>Looking for that Word?</h1>
            <h2>Dictionary Search</h2>
            <form onSubmit={search}>
                <input type="search" className="search" onChange={updateWordChange}/>
                <input type="submit" className="submit" />
            </form>
        </div>
    );
}