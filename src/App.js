import React, {Component} from "react"
// import './App.css';
import styled from "styled-components"
import {createGlobalStyle} from "styled-components"

const GlobalStyle = createGlobalStyle `
*{
  margin: 0%;
  padding: 0%;
  box-sizing: border-box;
  list-style: none;
}

// h1{
//   color: blue;
//   display: flex;
//   justify-content: center;
//   margin-bottom: 5%;
  
// }
body{
  height: 100%;
  margin-top: 5%;
  display: flex;
  justify-content: center;
  background-color: burlywood;
  gap: 1vh;
}
img{
  width: 30%;
  
  margin-left: 15%;
  padding-top: 30%;
}
ul{
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center
}
`
const Title = styled.h1`
color: white;
`
export default class todo extends Component {
  state = {
    tarefa: "",
    lista: []
  }

  add = (event) => {
    let {tarefa, lista} = this.state
    if(tarefa != "" ){
      this.setState({
        lista: lista.concat({
          tarefa: tarefa,
          id: Date.now()
        }),
        tarefa: "",
      })
    }
    event.preventDefault(); 
    // Serve para a pagina não dar reload na página, quando se usa onsubmit.
  }

  remover = (id) => {
    let {lista} = this.state
    this.setState({
      lista: lista.filter((item) => {
       return item.id != id
      })
    })
  }
  handleChange = (e) => {
    this.setState({
      tarefa: e.target.value
    })

  }

  render(){
    return(
      <div>
        <GlobalStyle />
        <form onSubmit={this.add}>
        <Title> Lista de Tarefas </Title>
        <input 
        maxLength={40}
        placeholder={"Insira sua tarefa aqui"}
        onChange={this.handleChange} type="text" value={this.state.tarefa} />]
        <button>Adicionar Tarefa</button>
        <div>
        {this.state.lista.map((item) => (
          <ul>
            <li>{item.tarefa}  <img onClick={() =>{
              this.remover(item.id)
            }} src="https://img.icons8.com/glyph-neue/64/000000/trash.png"/>
             </li>
          </ul>
        ))}
        </div>
      </form>
      </div>
    )
  }
}