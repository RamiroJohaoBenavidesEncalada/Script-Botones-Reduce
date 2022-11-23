import { useReducer, useState } from "react";

//1. Paso. crear funcion reducer. 
//Estado, 
//objeto. action {type, ...otros-datos }
function reducer(state, action) {
    switch (action.type) {
        case "red":
            return "red";
        case "yellow":
            return "yellow";
        case "green":
            return "green";
        case "blue":
            return "blue";
        case "orange":
            return "orange";
        default:
            throw new Error();
    }
}

//2. Crear la inicializacion
const estadoInicial = "blue";

const BotonColoresReducer = () => {

    //3. Utilizar el hook useReducer...
    //[estado,dispatch]
    const [color, dispatch] = useReducer(reducer, estadoInicial);

    //4. Utilizar dispatch, con las acciones que requiero
    return (
        <>
            <div>
                <button style={{ backgroundColor: 'red' }} onClick={() => dispatch({ type: 'red' })}>Rojo</button>
                <button style={{ backgroundColor: 'yellow' }} onClick={() => dispatch({ type: 'yellow' })}>Amarillo</button>
                <button style={{ backgroundColor: 'green' }} onClick={() => dispatch({ type: 'green' })}>Verde</button>
                <button style={{ backgroundColor: 'blue' }} onClick={() => dispatch({ type: 'blue' })}>Verde</button>
                <button style={{ backgroundColor: 'orange' }} onClick={() => dispatch({ type: 'orange' })}>Verde</button>

            </div>

            <div>
                <button style={{ backgroundColor: color }}>
                    Cuadro
                </button>
            </div>
        </>
    );
};

export default BotonColoresReducer;