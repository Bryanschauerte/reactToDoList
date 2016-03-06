var { ActionTypes } = require( '../constants/Constants' );
var TodoDispatcher = require('../dispatcher/TodoDispatcher');


var ViewActionsCreator = {


  destroyTASK(taskID){

    TodoDispatcher.dispatch({
      ActionType: ActionTypes.DELETE_TASK,
      taskID: taskID
    })
  },
  destoryTODO(taskID, todoID){

    TodoDispatcher.dispatch({
      ActionType: ActionTypes.DELETE_TODO,
      taskID: taskID,
      todoID: todoID
    })
  },
  createATASK( title ){

    TodoDispatcher.dispatch({
      ActionType: ActionTypes.ADD_TASK,
      title: title
    })
  },
  createATODO( taskID, input ){

    TodoDispatcher.dispatch({
      ActionType: ActionTypes.ADD_TODO,
      input: input,
      taskID: taskID
    })
  }


};

module.exports = ViewActionsCreator;
