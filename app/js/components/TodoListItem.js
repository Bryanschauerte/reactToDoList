import React from "react";
import ViewActionsCreator from "../actions/ViewActionsCreator";

var TodoListItem = React.createClass({

  props:{
    singleTodo: React.PropTypes.array,
    taskID: React.PropTypes.string.isRequired

  },

  getInitialState(){
    return {
    timesClicked: 0,
    className: "clickZero"
    };
  },

  increaseTimesClicked(){

    if(this.state.timesClicked > 1){
      var todoID = this.props.singleTodo[0];
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
      key={this.props.singleTodo[0]}
      onClick={this.increaseTimesClicked}
      className={this.state.className}
      >
      {this.props.singleTodo[1]}
    </li>);
  }

});

module.exports = TodoListItem;
