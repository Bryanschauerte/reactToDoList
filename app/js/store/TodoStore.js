import React from 'react';
var TodoDispatcher = require('../dispatcher/TodoDispatcher');
var { EventEmitter } = require('events');
var assign =require('object-assign');
var events = new EventEmitter();
var CHANGE_EVENT = 'change';
import { ActionTypes } from '../constants/Constants';

var _tasks = [];

function addATask(taskTitle){
  var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
  _tasks.push({id:id, title:taskTitle, todos:[]});

}

function addATodo (taskID, input){
  var uniqueId = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
  var updated_tasks = _tasks.map((item)=>{
    if(item.id == taskID){
      //maybe a problem here with push returing 1
      return item.todos.push([uniqueId, input, false]);
    }
    return item;
  })

  return _task = updated_tasks;
}



function destroyATask(id){
  var updated_tasks = _tasks.filter((item)=>{
    return item.id != id;
  })
  return _tasks = updated_tasks;
}

function destoryTodo(taskID, todoID) {

  var allButRemoved = _tasks.map((item)=>{
    if( item.id == taskID ){
      var filteredTodos = item.todos.filter((aItem)=>{

        if (aItem[0] != todoID){
          return aItem;
        }
      });
      item.todos =  filteredTodos;
      return item;
    }
    return item;
  });
    return allButRemoved = _tasks;
};

var TodoStore = assign({}, EventEmitter.prototype, {

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },
  emitChange(){
  this.emit(CHANGE_EVENT);
  },

  getAllTasks(){
    return _tasks;
  }


});

TodoDispatcher.register((action)=>{
  var text;
  var taskID;
  var todoID;
  var input;

  if(action.type == ActionTypes.ADD_TASK){
    text = action.title.trim();
    console.log("ADD_TASK firing", text);
    if(text != ''){
      addATask(text);
      TodoStore.emitChange();
    }
  }

  if(action.type == ActionTypes.ADD_TODO){
    input = action.input.trim();
    taskID = action.taskID;
    console.log("ADD_TODO firing", input);
    if(text != ''){
      addATodo(taskID, input);
      TodoStore.emitChange();
    }
  }

  if(action.type = ActionTypes.DELETE_TASK){
    console.log("DELETE_TASK firing", input);
    taskID = action.taskID;
    destroyATask(taskID);
    TodoStore.emitChange();
  }
  if(action.type = ActionTypes.DELETE_TODO){
    taskID = action.taskID;
    todoID= action.todoID;
    destoryTodo(taskID, todoID);
    TodoStore.emitChange();
  }


})

module.exports = TodoStore;
