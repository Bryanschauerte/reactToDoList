import React from "react";
import ViewActionsCreator from "../actions/ViewActionsCreator";
import TextInput from './TextInput';
import TodoListItem from './TodoListItem';
import TodoStore from '../store/TodoStore'

function getTaskstodosState(TaskID) {
  return {todos: TodoStore.getTaskTodos(TaskID) }
}

var TaskBox = React.createClass({

  getInitialState(){
    return {
      title: this.props.title,
      todos: this.props.todos,
      id: this.props.id
    }
  },

  getDefaultProps(){
    return {
        title: React.PropTypes.string,
        todos: React.PropTypes.array,
        id: React.PropTypes.string,
        className: React.PropTypes.string
      }
  },


  componentWillMount(){
    TodoStore.addChangeListener(this._onChange);
  },

  componentWillUnmount(){
    TodoStore.removeChangeListener(this._onChange);
  },
  _onChange(){
    var TaskID = this.state.id;
    if(this.isMounted){
    this.setState(getTaskstodosState(TaskID));
    }
  },

renderListItems(){
  var taskID = this.state.id;
  var todos = this.state.todos.map((item, index)=>{
    return (
      <TodoListItem
      taskID={taskID}
      key={index}
      singleTodo={item}
      />);
  });
  return todos;
},
removeTaskBox(){
  var taskID = this.state.id;
  ViewActionsCreator.destroyTASK(taskID);
},

render(){

    return(
      <div className="TaskBox" key={this.state.id}>
        <div className="taskBoxHeader"><h3 className="taskBoxTitle">Title: {this.state.title}
          <br/><button
            onClick={this.removeTaskBox}
            >REMOVE TASK</button>
        </h3>

         </div>
          <TextInput
            className = "taskText"
            placeholder= "Add a Subtask"
            onSave = {this._saveAndAddTodo}
            />
          <ul>{this.renderListItems()}</ul>
      </div>
    );
  },
  _saveAndAddTodo(input){
    var taskID = this.state.id;
    ViewActionsCreator.createATODO( taskID, input );
  }

});

module.exports = TaskBox;
