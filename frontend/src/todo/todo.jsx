import React from 'react';
import axios from 'axios';

import PageHeader from '../template/pageHeader';
import TodoForm from '../todo/todoForm';
import TodoList from '../todo/todoList';

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends React.Component{
    constructor(props){
      super(props)
      this.state = { description: '', list: []}

      this.handleChange = this.handleChange.bind(this);
      this.handleAdd = this.handleAdd.bind(this);
    }
  
  handleChange(e){
    this.setState({...this.state, description: e.target.value})  
  }

  handleAdd(e){
    const description = this.state.description;
    axios.post(URL, { description })
        .then(resp => console.log('funcionou'))

   }

  render(){
    return (
      <div>
       <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
       <TodoForm description={this.state.description} handleAdd={this.handleAdd} handleChange={this.handleChange}/>
       <TodoList />
      </div>
    )
  }
}