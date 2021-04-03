import React from 'react';
import Todo from './todo';

import { bindActionCreators } from 'redux';

import { markAsDone, markAsPending, remove } from '../actions/todoActions';
import { connect } from 'react-redux';
import IconButton from '../template/iconButton';

const TodoList =  props => {

  const renderRows = () =>{
    const list = props.list || []
    return (
       list.map(todo => (
        <tr key={todo._id}>
          <td>{todo._id}</td>
          <td>{todo.description}</td>
          <td className={todo.done ? 'markedAsDone' : ''}>
          <IconButton style='success' icon='check' onClick={() => props.markAsDone(todo)} hide={todo.done}></IconButton>
          <IconButton style='warning' icon='undo' hide={!todo.done} onClick={()=> props.markAsPending(todo)}></IconButton>
            <IconButton style='danger' icon='trash-o' hide={todo.done} onClick={() => props.Remove(todo)}></IconButton>
          </td>
        </tr>
      ))
    );
  }
  return(
    <table className='table'>
      <thead>
        <tr>
          <th>Descrição</th>
          <th className="tableActions">Ações</th>
        </tr>
      </thead>
      <tbody>
        {renderRows()}
      </tbody>
    </table>
  )
}

const mapStateToProps = state =>({
  list: state.todo.list
})

const mapDispatchToProps = dispatch => 
bindActionCreators({ markAsDone, markAsPending, remove }, dispatch)

export default(connect(mapStateToProps, mapDispatchToProps))(TodoList)