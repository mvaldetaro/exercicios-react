import React from 'react';
import { childWithProps } from '../utils/utils';
//import Filho from "./Filho";

//https://www.udemy.com/react-redux-pt/learn/v4/t/lecture/10990678?start=0



export default props => 
    <div>
        <h1>{props.nome} {props.sobrenome}</h1>
        <h2>Filhos</h2>
        <ul>
            { 
               childWithProps(props) 
            }
            {/* <Filho nome="Pedro" sobrenome={props.sobrenome}/> */}
            {/* Utilizando operador spread, todas as propriedades ro [ai são passadas para o filho] */}
            {/* <Filho {...props} />
            <Filho {...props} nome="Carla"/> */}
        </ul>
    </div>