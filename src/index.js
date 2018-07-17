import React from 'react';
import ReactDOM  from 'react-dom';

//import Primeiro from './componentes/Primeiro';
import BomDia from './componentes/BomDia';

// As chaves expõe um componente contido em um único arquivo
//import { BoaTarde, BoaNoite } from "./componentes/Multiplos";

import Multiplos, { BoaTarde, BoaNoite } from "./componentes/Multiplos";

import Multi from "./componentes/Multiplos";

import Saudacao from "./componentes/Saudacoes";

import Pai from './componentes/Pai';
import Filho from "./componentes/Filho";

ReactDOM.render(
    <div>

        <Pai nome="Paulo" sobrenome="Silva">
            {/* Como passar os filho no corpo do pai */}
            <Filho nome="José" />
            <Filho nome="Joaquim" />
            <Filho nome="Manuel" />
        </Pai>
        
        <Saudacao tipo="Bom dia" nome="João"/>

        <hr/>
        <BomDia nome="Magno"/>
        
        <BoaTarde nome="Magno"/>
        <BoaNoite nome="Magno"/>

        <Multi.BoaNoite nome="Magno"/>
        <Multi.BoaTarde nome="Magno"/>

        <Multiplos.BoaNoite nome="Magno"/>
        <Multiplos.BoaTarde nome="Magno"/>
    </div>
    , document.getElementById('root')
);

