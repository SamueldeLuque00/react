
const Pantalla =(props)=>{
    const [valor, setValor]=useState(0)
    return(
      <input type="text" value={valor}/>
    )
}

export default Pantalla