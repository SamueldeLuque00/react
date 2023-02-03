import { useState } from "react"
import { Fragment } from "react"

export const Contador=()=>{

    const [valor, setValor]=useState("0")

    // const sumar =()=>{setValor(valor+1)}
    // const restar=()=>{setValor(valor-1)}
    const uno =()=> {setValor(valor + "1")}
    const dos =()=> {setValor(valor + "2")}
    const tres =()=>{setValor(valor + "3")}
    const cuatro =()=>{setValor(valor + "4")}
    const cinco =()=>{setValor(valor + "5")}
    const seis =()=>{setValor(valor + "6")}
    const siete =()=>{setValor(valor + "7")}
    const ocho =()=>{setValor(valor + "8")}
    const nueve =()=>{setValor(valor + "9")}
    const cero =()=>{setValor(valor + "0")}

    const operador =()=>{valor = '+' ||'-' || '*' || '/'}


    return(
        <Fragment>
            <h1>Calculator</h1>
            {/* <button type="button"onClick={sumar}>+</button>
            <p>{valor}</p>
            <button type="button" onClick={restar}>-</button> */}
            <table>
                <tr>
                    <td colspan="4"><input type="text" value={valor} /></td>
                </tr>
                <tr>
                    {/* <td colspan="2"><button type="button">⌫</button></td> */}
                </tr>
                <tr>
                    <td><button type="button" onClick={siete}>7</button></td>
                    <td><button type="button" onClick={ocho}>8</button></td>
                    <td><button type="button" onClick={nueve}>9</button></td>
                    <td><button type="button">/</button></td>
                    
                </tr>
                <tr>
                    <td><button type="button" onClick={cuatro}>4</button></td>
                    <td><button type="button" onClick={cinco}>5</button></td>
                    <td><button type="button" onClick={seis}>6</button></td>
                    <td><button type="button">*</button></td>
                    
                </tr>
                    <tr>
                    <td><button type="button" onClick={uno}>1</button></td>
                    <td><button type="button" onClick={dos}>2</button></td>
                    <td><button type="button" onClick={tres}>3</button></td>
                    <td><button type="button" onClick={"+"}>+</button></td>
                </tr>
                    <tr>
                    <td><button type="button">.</button></td>
                    <td><button type="button" onClick={cero}>0</button></td>
                    <td><button type="button">=</button></td>
                    <td><button ctype="button">-</button></td>

                </tr>
            </table>
        </Fragment>
    )
}
export default Contador