

const Producto = ({id, img, titulo, precio, descript, cantidad, estado}) =>{
    return(
        <div className="card">
            <img src={img} alt="..." className="imagen-card"> </img>
            <h2 className="titulo-card">{titulo}</h2>
            <p>{descript}</p>
            <h4 className="precio-card">{precio}</h4>
            <div>
                <button className="boton-card">Comprar</button>
                <span>{cantidad}</span>
                <span>{estado}</span>
            </div>
        
        </div>
    )
}

export default Producto;