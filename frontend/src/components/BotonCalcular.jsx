import "../styles/BotonCalcular.css";


function BotonCalcular( props ){
    return(
        <div className="row">
            <div className="col-lg-2 offset-lg-5">
                <button className="btn btn-success boton-calcular" onClick={props.handleCalcular}>Calcular</button>
            </div>
        </div>
    )
}

export default BotonCalcular;