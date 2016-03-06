import React from 'react';
import TodoStore from "../store/TodoStore";
import ViewActionsCreator from '../actions/ViewActionsCreator';
import TaskBox from './TaskBox';


function getTasksState() {
  return {allTasks: TodoStore.getAllTasks() }
}

var MainContainer = React.createClass({
  props:{
    allTasks: React.PropTypes.array.isRequired
  },

getInitialState(){
  return ({allTasks: this.props.allTasks});
},
componentWillMount(){
  TodoStore.addChangeListener(this._onChange);
},
componentWillUnmount(){
  TodoStore.removeChangeListener(this._onChange);
},


renderTaskBoxes(){

  var TaskBoxes = this.state.allTasks.map((item, index)=>{
    return (<TaskBox
      key={index}
      title={item.title}
      todos={item.todos}
      id={item.id}
      className="TaskBoxWhole"
      />);
  })
  return TaskBoxes;
},

  render(){
    return (
      <div className="MainContainer">
        <h2>this is the boxes</h2>
        {this.renderTaskBoxes()}
      </div>
    );
  },

  _onChange(){
    this.setState(getTasksState());
  }

})
module.exports = MainContainer;
