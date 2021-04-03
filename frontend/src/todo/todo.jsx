import React from 'react';

import PageHeader from '../template/pageHeader';
import TodoForm from '../todo/todoForm';
import TodoList from '../todo/todoList';

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