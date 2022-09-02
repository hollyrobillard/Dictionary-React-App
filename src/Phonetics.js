import React from "react";
import "./Phonetics.css";

import ReactAudioPlayer from 'react-audio-player';

export default function Phonetics(props) {
    console.log(props.phonetics[0].audio)
    if (props.phonetics) {
        return(
            <div className="Phonetics">
                {props.phonetics.map((phonetic, index) => {
                    return(
                        <div key={index} className="phonetic">
                            <ReactAudioPlayer
                                src={phonetic.audio}
                                controls
                            />
                            <span className="phonetic-text">{phonetic.text}</span>
                        </div>
                    )
                })}
            </div>
        );
    } else {
        return null;
    }
}


