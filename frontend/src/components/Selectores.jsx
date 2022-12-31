import React, { useState, useEffect } from "react";
import Selector from "./Selector";

function Selectores( props ){

    const equipos = ["Real Madrid", "FC Barcelona", "Athletic de Bilbao", "Valencia", "Atlético de Madrid", "Girona", "Rayo Vallecano", "Real Sociedad", "Real Betis", "Almería", "Espanyol", "Osasuna", "Villarreal", "Celta de Vigo", "Mallorca", "Sevilla", "Real Valladolid", "Getafe", "Elche", "Cádiz"];
    const arbitros = ["Cuadra Fernández", "De Burgos Bengoetxea", "Cel Cerro Grande", "Díaz de Mera Escuderos", "Figueroa Vázquez", "Gil Manzano", "González Fuertes", "Hernández Hernández", "Ignacio Iglesias Villanueva", "Martínez Munuera", "Mateu Lahoz", "Melero López", "Munuera Montero", "Muñiz Ruiz", "Ortiz Arias", "Pizarro Gómez", "Pulido Santana", "Sánchez Martínez", "Soto Grado", "Alberola Rojas", "Cordero Vega"];

    const [local, setLocal] = useState(null);
    const [visitante, setVisitante] = useState(null);
    const [arbitro, setArbitro] = useState(null);

    function handleLocal(equipo){
        setLocal(equipo);
    }

    function handleVis(equipo){
        setVisitante(equipo);
    }

    function handleRef(arbitro){
        setArbitro(arbitro);
    }


    const equiposLoc = equipos.filter(e => e !== visitante);
    const equiposVis = equipos.filter(e => e !== local);

    useEffect(() => {
        if (local !== null && visitante !== null && arbitro !== null){
            props.handleSelectores(true);
            props.handleLambda(local, visitante, arbitro);
        }
        else{
            props.handleSelectores(false);
        }
    }, [local, visitante, arbitro])

    



    return(
        <div className="row">
            <div className="col-lg-4 g-5">
                <Selector data = { equiposLoc } text = "Local" getSelected = {handleLocal}></Selector>
            </div>
            <div className="col-lg-4 g-5">
                <Selector data = { equiposVis } text = "Visitante" getSelected = {handleVis}></Selector>
            </div>
            <div className="col-lg-4 g-5">
                <Selector data = { arbitros } text = "Árbitro" getSelected = {handleRef}></Selector>
            </div>
        </div>
    )

}

export default Selectores;