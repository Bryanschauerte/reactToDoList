import React from 'react';
import ReactDOM from 'react-dom';
import MainContainer from './js/components/MainContainer';
import Header from './js/components/Header';
import TodoStore from './js/store/TodoStore'




function getTasksState(){
  return {
    allTasks: TodoStore.getAllTasks()
  }
}

var ToDoAPP = React.createClass({

getInitialState(){
  return getTasksState();
},
componentWillMount(){
  TodoStore.addChangeListener(this._onChange);
},
componentWillUnmount(){
  TodoStore.removeChangeListener(this._onChange);
},

  render(){
    return (
      <div>
        <Header />
        <MainContainer
          id="MainContainer"
          allTasks ={this.state.allTasks}
          />
      </div>
    );
  },

  _onChange(){
    this.setState(getTasksState());
  }

})



ReactDOM.render(<ToDoAPP/>, document.getElementById('target'));
