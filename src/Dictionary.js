import React, { useState } from "react";
import axios from "axios";

import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props) {
    const [word, setWord] = useState(props.defaultWord);
    const [results, setResults] = useState(null);
    
    function search(event) {
        event.preventDefault();
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleResponse(response) {
        setResults(response.data[0])
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
            <Results results={results} defaultWord={props.defaultWord}/>
        </div>
    );
}