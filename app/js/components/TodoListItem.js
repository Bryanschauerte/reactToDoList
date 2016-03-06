import React from "react";
import ViewActionsCreator from "../actions/ViewActionsCreator";


// [uniqueId, input, false]

var TodoListItem = React.createClass({

  props:{
    singleTodo: React.PropTypes.array,
    taskID: React.PropTypes.string.isRequired

  },

  getInitialState(){
    return {
    id: this.props.singleTodo[0],
    text: this.props.singleTodo[1],
    done: this.props.singleTodo[2],
    timesClicked: 0,
    className: "clickZero"
    };
  },
  removeTodo(taskID, todoID){
    var tastID = this.state.id;
    ViewActionsCreator.destoryTODO(taskID, todoID);                   ////////
  },

  increaseTimesClicked(){

    if(this.state.timesClicked > 2){
      var todoID = this.state.id;
      var taskID = this.props.taskID;
      ViewActionsCreator.destoryTODO(taskID, todoID);

    }
    var timesClicked = this.state.timesClicked;
    timesClicked++;

    var styleNames = ['clickZero', 'clickOne', 'clickTwo'];
    var style = styleNames[timesClicked]
    this.setState({
      className: style,
      timesClicked: timesClicked

    })

  },


  render(){
    var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
    return (<li
      key={id}
      onClick={this.increaseTimesClicked}
      className={this.state.className}
      >
      {this.state.text}
    </li>);
  }

});

module.exports = TodoListItem;
