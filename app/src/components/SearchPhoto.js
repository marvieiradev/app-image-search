import React, { useState } from "react";
import Unsplash, { toJson } from "unsplash-js";

const unsplash = new Unsplash({
    //A chave ACCESS_KEY é gerada na API do Unsplash, paara criar é necessário a criação de uma conta de desenvolvedor no: https://unsplash.com/developers
    accessKey: "ACCESS_KEY"
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
        <>
            <div>
                <form className="form" onSubmit={searchP}>
                    <label htmlFor="query" className="label">
                        {""}
                    </label>

                    <input
                        type="text"
                        name="query"
                        className="input"
                        required="true"
                        minLength={3}
                        placeholder={`Digite algo`}
                        value={query}
                        onChange={(e) => setQuery(e.target.value)} />
                    <button className="button" type="submit">
                        🔍︎
                    </button>
                </form>
                <div className="card-list">
                    {pics.map((pic) => <div className="card" key={pic.id}>
                        <a href={pic.urls.full} className="card-image">
                            <img
                                src={pic.urls.small}
                                alt={pic.alt_description}
                                width="100%"
                                height="100%">
                            </img>
                        </a>
                    </div>)}
                </div>
            </div>
        </>
    )
}