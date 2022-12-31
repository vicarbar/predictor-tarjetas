import React from "react";
import "../styles/Titulo.css";
import liga from "../images/liga.png";

function Titulo(){

    return(
        <div className="row contenedor-titulo">
            <div className="col-lg-10">
                <h1>Predictor de tarjetas La Liga 2022-2023</h1>
            </div>
            <div className="col-lg-2">
                <img src = {liga} className="img img-fluid" alt = "Liga Santander"/>
            </div>
        </div>
    )

}

export default Titulo;