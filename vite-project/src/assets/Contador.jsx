import { useState } from "react"
import { Fragment } from "react"

export const Contador=()=>{

    const [valor, setValor]=useState("");
    const [valor1, setValor1]=useState("");
    const [op, setOp]=useState("");
  
    const Operador = (i) => {
      if (op == "") {
        setValor1(parseFloat(valor));
        setOp(i.target.value);
        setValor("");
      } else {
        setOp(i.target.value);
      }
    };

    const btnBorrar =()=>{
        return(
            setValor(""),
            setOp("")
        )
    }
  
    const Res =()=>{
      if(op == "+"){
        setValor(parseFloat(valor) + valor1);
        setOp("");
        setValor1("");
      }
      if(op == "-"){
        setValor(parseFloat(valor1) - valor);
        setOp("");
        setValor1("");
      }
      if(op == "/"){
        setValor(parseFloat(valor1) / valor);
        setOp("");
        setValor1("");
      }
      if(op == "*"){
        setValor(parseFloat(valor) * valor1);
        setOp("");
        setValor1("");
      }
    } 
  
    function Boton(props){
      return(
        <button className="btn" onClick={() => setValor(valor + (props.numero))}>{props.numero}</button>
      )
    } 
  
    function BtnOpera(props){
      return(
        <button className="btn-re" onClick={Operador} value={props.numero}>{props.numero}</button>
      )
    } 
  
    function Resultado(props){
      return(
        <button className="btn-re" onClick={Res} value={props.numero}>{props.numero}</button>
      )
    }

    function Borrar(props){
        return(
          <button className="btn-re" onClick={btnBorrar} value={props.numero}>{props.numero}</button>
        )
    }

  
    const Pantalla =()=>{
      return(
        <input type="text" className="pant" value={valor} />
      )
    }
    
    return(
        <>
        <h2>CALCULADORA</h2>
        <div className="container">
            <Fragment>
                <table>
                    <tr>
                        <Pantalla/>
                    </tr>       
                    <tr>
                        <Boton numero="9"/>
                        <Boton numero="8"/>
                        <Boton numero="7"/>
                        <BtnOpera numero="+"/>
                    </tr>
                    <tr>
                        <Boton numero="4"/>
                        <Boton numero="5"/>
                        <Boton numero="6"/>
                        <BtnOpera numero="-"/>
                    </tr>
                    <tr>
                        <Boton numero="1"/>
                        <Boton numero="2"/>
                        <Boton numero="3"/>
                        <BtnOpera numero="*"/>
                    </tr>
                    <tr>
                        <Borrar numero="C"/>
                        <Boton numero="0"/>
                        <BtnOpera numero="/"/>
                        <Resultado numero="="/>
                    </tr>
                </table>
            </Fragment>
        </div>
        </>  
    )
}
export default Contador