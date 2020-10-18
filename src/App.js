import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Header from './components/Header';
import Todo from './components/Todo';
import uuid from 'react-uuid';
import About from './components/About';
import Axios from 'axios';


export default class App extends Component {
  constructor(props)
{
  super(props);
  this.state = {
    todos:[],
  searchBar:""
  };
}
handleItemCheck = (id) => {
  this.setState(this.state.todos.map((todo) => {
    if(todo.id === id)
    todo.completed = !todo.completed;
    return todo;
  }))
}
handleChange = (sc) => {
  this.setState({searchBar:sc})
}
handleSubmit = () => {
  Axios.post('https://jsonplaceholder.typicode.com/todos',{
    title:this.state.searchBar,
    completed: false
  }).then(res => {this.setState({todos:[...this.state.todos,res.data]})
})}

handleDelete = (id) => {
  Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
  .then(res => this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]}) )
  
}
 render(){
  return (
    <Router>
    <div className="App">
      <Header />
      <Route exact path='/' render={props =>(
        <Todo 
          todos={this.state.todos} 
          handleItemCheck={this.handleItemCheck} 
          handleSubmit={this.handleSubmit} 
          handleChange={this.handleChange} 
          handleDelete={this.handleDelete}
        />)} 
      />
      <Route path='/about' render={props => (<About />)} />

    </div>
    </Router>
  );
}
componentDidMount(){
  Axios.get('https://jsonplaceholder.typicode.com/todos?_limit=20')
  .then(res => {this.setState({todos: res.data})})
}
}
 
