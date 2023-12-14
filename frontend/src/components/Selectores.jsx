import React, { useState, useEffect } from "react";
import Selector from "./Selector";

function Selectores( props ){

    const equipos = ["Real Madrid", "FC Barcelona", "Athletic de Bilbao", "Valencia", "Atlético de Madrid", "Girona", "Rayo Vallecano", "Real Sociedad", "Real Betis", "Almería", "Las Palmas", "Osasuna", "Villarreal", "Celta de Vigo", "Mallorca", "Sevilla", "Granada", "Getafe", "Deportivo Alavés", "Cádiz"];
    const arbitros = ["Alberola Rojas", "Cuadra Fernández", "Diaz de Mera Escuderos", "García Verdura", "Gil Manzano", "González Fuertes", "Hernández Maeso", "Munuera Montero", "Ortiz Arias", "Pulido Santana", "Sánchez Martínez", "Soto Grado", "De Burgos Bengoetxea", "Figueroa Vázquez", "Hernández Hernández", "Javier Iglesias Villanueva", "Martínez Munuera", "Muñiz Ruiz", "Busquets Ferrer", "Melero López"]

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