import React from "react";
import ViewActionsCreator from "../actions/ViewActionsCreator";


// [uniqueId, input, false]

var TodoListItem = React.createClass({

  props:{
    singleTodo: React.PropTypes.array,
    removeFunction: React.PropTypes.func.isRequired

  },

  getInitialState(){
    return {
    id: this.props.singleTodo[0],
    text: this.props.singleTodo[1],
    done: this.props.singleTodo[2],
    timesClicked: 0,
    onRemove: this.props.removeFunction,
    className: "clickZero"
  };
  },


  increaseTimesClicked(){
    if(this.state.timesClicked >= 3){
      var todoID = this.state.id;
      return this.state.onRemove(todoID);
    }
    var styleNames = ['clickZero', 'clickOne', 'clickTwo'];
    this.setState({
      className: styleNames[(this.state.timesClicked + 1)],
      timesClicked: this.state.timesClicked++

    })
  },

  render(){
    return (<li
      onClick={this.increaseTimesClicked}
      className={this.state.className}
      >
      {this.state.text}
    </li>);
  }

});
console.log(TodoListItem, "todolist")
module.exports = TodoListItem;
