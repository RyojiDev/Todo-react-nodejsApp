import React from 'react';
import axios from 'axios';

import PageHeader from '../template/pageHeader';
import TodoForm from '../todo/todoForm';
import TodoList from '../todo/todoList';

const URL = 'http://localhost:3003/api/todos'

let list = [{_id: 1, description: 'fdfdfdsfd'}, {_id: 2, description: 'teste'}]
export default class Todo extends React.Component{

  render(){
    return (
      <div>
       <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
       <TodoForm />
       <TodoList />
      </div>
    )
  }
}