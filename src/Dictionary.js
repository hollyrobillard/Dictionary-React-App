import React, { useState } from "react";
import axios from "axios";

import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
    const [word, setWord] = useState(props.defaultWord);
    const [results, setResults] = useState(null);
    const [photos, setPhotos] = useState(null);
    
    function search(event) {
        //Dictionary Call
        event.preventDefault();
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
        axios.get(apiUrl).then(handleResponse);
        //Pexels Call
        let pexelsApiKey = "563492ad6f917000010000014c382aac86984c08b0ee49c7a54599e8";
        let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${word}&per_page=9`;
        axios.get(pexelsApiUrl, { headers: { Authorization: `Bearer ${pexelsApiKey}` } }).then(handlePexelsResponse);
    }

    function handleResponse(response) {
        setResults(response.data[0])
    }

    function handlePexelsResponse(response) {
        setPhotos(response.data.photos)
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
            <Photos photos={photos} />
        </div>
    );
}