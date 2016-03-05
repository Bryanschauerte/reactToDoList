import React from "react";
import ViewActionsCreator from "../actions/ViewActionsCreator";
import TextInput from './TextInput';
import TodoListItem from './TodoListItem';

console.log(TodoListItem)
var TaskBox = React.createClass({
  props:{
    title: React.PropTypes.string,
    todos: React.PropTypes.array,
    id: React.PropTypes.string,
    removeTask:React.PropTypes.func.isRequired,
    className: React.PropTypes.string
  },

  getInitialState(){
    return {
      title: this.props.title,
      todos: this.props.todos,
      id: this.props.id
    }
  },
  removeTodo(todoID){
    var tastID = this.state.id;
    ViewActionsCreator.destoryTODO(taskID, todoID);
  },

renderListItems(){

  var todos = this.state.todos.map((item, index)=>{
    var id = this.item.id
    var removeHandle = this.removeTodo.bind(this, id);
    return (<TodoListItem
      key={item.id}
      singleTodo={item}
      removeFunction={this.removeHandle}/>);
  });
  return todos;
},

removeTask(){
  var taskID = this.state.id;
  this.props.removeTask(taskID);
},

  render(){

    return(
      <div className="TaskBox">
        <div className="taskBoxHeader"><h3 className="taskBoxTitle">{title}</h3>
         <button onClick={this.removeTask}>REMOVE TASK</button>
         </div>
          <TextInput
            className = "taskText"
            Placeholder= "Add a Subtask"
            onSave = {this._save}
            />
          <ul>{renderListItems()}</ul>
      </div>
    );
  }

});
module.exports = TaskBox;
