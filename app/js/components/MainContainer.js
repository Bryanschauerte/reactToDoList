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
removeTaskBox(TastID){
  ViewActionsCreator.destoryTODO(TaskID);
},

renderTaskBoxes(){
  var TaskBoxes = this.state.allTasks.map((item, index)=>{
    var removeHandle = this.removeTaskBox.bind(this.item.id);
    return (<TaskBoxes
      title={this.item.title}
      todos={this.item.todos}
      id={this.item.id}
      removeTask={this.removeHandle}
      className="TaskBoxWhole"
      />);
  })
},

  render(){
    return (
      <div className="MainContainer">
{this.renderTaskBoxes()}
      </div>
    );
  },

  _onChange(){
    this.setState(getTasksState());
  }

})
module.exports = MainContainer;
