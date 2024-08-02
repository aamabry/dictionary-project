import React from "react";
import "./Phonetic.css";

export default function Phonetic(props){
    return (
        <div className="Phonetic">
            <a href={props.phonetic.audio} target="blank" rel="noreferrer" alt-text="keyword sound">
                Listen
            </a>
            <span className="text">{props.phonetic}</span>
        </div>
    )
}