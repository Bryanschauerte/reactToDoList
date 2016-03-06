import React from 'react';
import ViewActionsCreator from '../actions/ViewActionsCreator';
import todoStore from "../store/TodoStore";
import TextInput from "./TextInput";

var Header = React.createClass({


  render(){
    return (
      <div id ="headerContainer">
        <h1 id = "headerTitle">Your Tasks</h1>
        <TextInput
          id = "headerText"
          placeholder= "Enter Task Title"
          onSave = {this._save}
          />
      </div>
    )
  },
  _save(title){

    ViewActionsCreator.createATASK(title);

  }

});
module.exports = Header;
