import React, { useState } from "react";
import Unsplash, { toJson } from "unsplash-js";
//require('dotenv').config()

const unsplash = new Unsplash({
    accessKey: process.env.ACCESS_KEY
})

export default function SearchPhotos() {
    const [query, setQuery] = useState("");
    const [pics, setPics] = useState([]);

    const searchP = async (e) => {
        e.preventDefault();

        unsplash.search.photos(query).then(toJson).then((json) => {
            setPics(json.results);
        });
    }

    return (
        <div>
            <form className="form" onSubmit={searchP}>
                <label htmlFor="query" className="label">
                    {""}
                </label>

                <input
                    type="text"
                    name="query"
                    className="input"
                    placeholder={`Digite algo`}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)} />
                <button className="button" type="submit">Buscar</button>
            </form>
            <div className="card-list">
                {pics.map((pic) => <div className="card" key={pic.id}>
                    <img
                        src={pic.urls.full}
                        alt={pic.alt_description}
                        className="card-image"
                        width="50%"
                        height="50%">
                    </img>
                </div>)}
            </div>
        </div>
    )
}