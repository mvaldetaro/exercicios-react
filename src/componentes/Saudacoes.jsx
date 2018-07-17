// Componente de classe
// Utilizado para componentes que possuem estado e ciclo de vida

import React, { Component } from 'react';

export default class Saudacao extends Component {

    // state = {
    //     tipo: "Fala",
    //     nome: "Pedro"
    // }

    // estado inicial
    state = {
        tipo: this.props.tipo,
        nome: this.props.nome
    }

    constructor(props) {
        super(props);

        // this dentro do construtor é uma instância do componente
        this.setTipo = this.setTipo.bind(this);  
    }
    
    setTipo(e) {
        //this.props.tipo = e.target.value;
        this.setState({ tipo: e.target.value })
        console.log(e.target.value);
    }

    setNome(e) {
        //this.props.tipo = e.target.value;
        this.setState({ nome: e.target.value })
        console.log(e.target.value);
    }
    
    render() {
        // Desestrutura o objeto props
        const { tipo, nome } = this.state;

        return (
            <div>
                <h1>{tipo} {nome}</h1>
                <hr />
                <input type="text" placeholder="Tipo..." value={tipo} onChange={this.setTipo} />
                <input type="text" placeholder="Nome..." value={nome} onChange={e => this.setNome(e)} />
                {/* <input type="text" placeholder="Tipo..." value={tipo} onChange={e => this.setTipo(e)} />
                <input type="text" placeholder="Nome..." value={nome} onChange={e => this.setNome(e)} /> */}
            </div>
        )
    }
}