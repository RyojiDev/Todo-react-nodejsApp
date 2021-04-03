import React from 'react';
import axios from 'axios';

import PageHeader from '../template/pageHeader';
import TodoForm from '../todo/todoForm';
import TodoList from '../todo/todoList';

const URL = 'http://localhost:3003/api/todos'

let list = [{_id: 1, description: 'fdfdfdsfd'}, {_id: 2, description: 'teste'}]
export default class Todo extends React.Component{
    constructor(props){
      super(props)
      this.state = { description: '', list: []}

      this.handleChange = this.handleChange.bind(this);
      this.handleAdd = this.handleAdd.bind(this);
      this.handleSearch = this.handleSearch.bind(this);
      this.handleClear = this.handleClear.bind(this);
      this.handleRemove = this.handleRemove.bind(this);

      this.handleMarkAsDone = this.handleMarkAsDone.bind(this);
      this.handleMarkAsPending = this.handleMarkAsPending.bind(this);
    }

    
  refresh(description = ''){
    /*const search = description ? `description__regex=/${description}/` : ''
    axios.get(`${URL}?sort=-createdAt${search}`)
        .then(resp => this.setState({...this.state, description, list: resp.data}))*/
        
  }
  
  handleChange(e){
    this.setState({...this.state, description: e.target.value})  
  }

  handleAdd(e){
    const description = this.state.description;
    axios.post(URL, { description })
        .then(resp => this.refresh())
   }

   handleRemove(todo){
     axios.delete(`${URL}/${todo._id}`)
      .then(resp => this.refresh(this.state.description))
   }

   handleMarkAsDone(todo){
    axios.put(`${URL}/${todo_id}`, {...todo, done: true})
      .then(resp => this.refresh(this.state.description))
   }

   handleMarkAsPending(todo){
     axios.put(`${URL}/${todo._id}`, {...todo, done: true})
          .then(resp => this.refresh())
   }

   handleSearch(){
     console.log("pesquisar");
   }

   handleClear(){
     this.refresh();
   }

  render(){
    return (
      <div>
       <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
       <TodoForm description={this.state.description} 
       handleAdd={this.handleAdd} 
       handleChange={this.handleChange}
       handleSearch={this.handleSearch}
       handleClear={this.handleClear}
       />
       <TodoList list={list} 
       handleRemove={this.handleRemove} 
       handleMarkAsDone={this.handleMarkAsDone}
       handleMarkAsPending={this.handleMarkAsPending}
       />
      </div>
    )
  }
}