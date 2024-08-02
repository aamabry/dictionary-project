import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props){
let [keyword, setKeyword] = useState(props.defaultKeyword);
let [definition, setDefinition] = useState(null);
let [loaded, setLoaded] = useState(false);
let [photos, setPhotos] = useState(null);

function handleDictionaryResponse(response){
    setDefinition(response.data);

    let pexelsApiKey = "vzfLNGWEgDLwmNQosc4VhOSDNMFSREKhJnQYVBCzTZrAsP9a2w6ztdPA";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`
    let headers = {"Authorization" : `${pexelsApiKey}`}
    axios.get(pexelsApiUrl, { headers: headers}).then(handlePexelsResponse);
}

function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
}

function search() {
    let apiKey = "1b509431b344bbaa8c5fo44ef08bca6t";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleDictionaryResponse);
}

function handleSubmit(event){
    event.preventDefault();
    search();
}

function handleKeywordChange(event){
    setKeyword(event.target.value);
}

function load (){
    setLoaded(true);
    search();
}

if (loaded) {
    return (
        <div className="Dictionary">
            <section>
                <h1>What are you looking for?</h1>
                <form onSubmit={handleSubmit}>
                <input 
                type="search" 
                placeholder="Search for a word..."
                autoFocus={true}
                onChange={handleKeywordChange} 
                defaultValue={props.defaultKeyword}/>
                </form>
            <div className="hint">
                Suggested words: sunset, pizza, metal, witches....
            </div>
            </section>
            <Results definition={definition}/>
            <Photos photos={photos}/>
        </div>
    )
} else {
    load();
    return "Loading...";
}


};