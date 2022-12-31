import "../styles/Resultados.css";



function Resultados( props ){


    return(
        <div className="container resultados">
            <div className="row justify-content-center info-arbitro">
                <h4>Árbitro: {props.parametros[2]}: {props.pred.arbitro} T/P.</h4>
            </div>
                <div className="row">
                <div className="col-lg-4">
                    <h4>{props.parametros[0]}: {props.pred.local} T/P.</h4>
                    <img src = {require("../images/"+props.parametros[0]+".png")} className="img img-fluid escudo" alt = {props.parametros[0]} />
                </div>
                <div className="col-lg-4">
                    <h4>Predicción de tarjetas: {props.pred.prediccion}</h4>
                    <h4>Probabilidades de tarjetas: </h4>
                    <p>+0.5: {props.pred.p0_5}%</p>
                    <p>+1.5: {props.pred.p1_5}%</p>
                    <p>+2.5: {props.pred.p2_5}%</p>
                    <p>+3.5: {props.pred.p3_5}%</p>
                    <p>+4.5: {props.pred.p4_5}%</p>
                    <p>+5.5: {props.pred.p5_5}%</p>
                    <p>+6.5: {props.pred.p6_5}%</p>
                </div>
                <div className="col-lg-4">
                    <h4>{props.parametros[1]}: {props.pred.visitante} T/P.</h4>
                    <img src = {require("../images/"+props.parametros[1]+".png")} className="img img-fluid escudo" alt = {props.parametros[1]} />
                </div>
            </div>
        </div>
    )

}

export default Resultados;