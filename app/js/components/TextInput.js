import React from 'react';
import ViewActionsCreator from '../actions/ViewActionsCreator';
import todoStore from "../store/TodoStore";

var TextInput = React.createClass({

  propTypes:{

    id: React.PropTypes.string,
    placeholder: React.PropTypes.string,
    text: React.PropTypes.string,
    className: React.PropTypes.string,
    onSave: React.PropTypes.func.isRequired

  },

  getInitialState(){
    return {
      text: this.props.value
    };
  },

  render(){

    return(<input
      className={this.props.className}
      id= {this.props.id}
      placeholder = {this.props.placeholder}
      onBlue = {this._save}
      onChange = {this._onChange}
      onKeyDown = {this._onKeyDown}
      text = {this.state.text}
      autoFocus= {true}
      />);

  },

  _save(){
    this.props.onSave(this.state.text);
    this.setState({
      text:''
    })
  },

  _onChange(event){
    this.setState({text: event.target.value});
  },

  _onKeyDown(event){
    if(event.keyCode == 13){
      this._save();
    }

  }

})

module.exports = TextInput;
