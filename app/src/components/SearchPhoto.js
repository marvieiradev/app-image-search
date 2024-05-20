import React from "react";

export default function SearchPhotos() {
    return (
        <div>
            <form className="form">
                <label htmlFor="query" className="label">
                    {""}
                </label>

                <input
                    type="text"
                    name="query"
                    className="input"
                    placeholder={`Digite algo`} />
                <button className="button" type="submit">Buscar</button>
            </form>
        </div>
    )
}