import React, { Fragment } from "react";

// Envolve mai de um componente / elementos, sem a necessidade de envolver em um outro elemento ou componente

export default props => 
    <Fragment>
        <h1>Bom dia {props.nome}</h1>
        <h2>Até breve</h2>
    </Fragment>


// Melhor opção apra retornar uma lista de componentes

// export default props => [
//   <h1 key='h1'>Bom dia {props.nome}</h1>
//   <h2 key='h2'>Até breve</h2>
// ]

// Opção mais comum para renderizar mais de um elemento / componente

// export default props => 
//     <div>
//         <h1>Bom dia {props.nome}</h1>
//         <h2>Até breve</h2>
//     </div>