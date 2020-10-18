import React, { Component } from 'react'
import TodoItem from './TodoItem'

export default class Todo extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        return this.props.handleSubmit();

    }
    handleChange = (e) => {
        return this.props.handleChange(e.target.value);

    }
    render() {
        const todos = this.props.todos.map((todo)=>{
           return <TodoItem key={todo.id} todo={todo} handleItemCheck={this.props.handleItemCheck} handleDelete={this.props.handleDelete}/>
        });
        return (
            <div>
                <form style={{display:'flex',padding:'4px'}} onSubmit={this.handleSubmit}>
                    <input type="text" style={{flex:'7'}}value={this.props.seachBar} onChange={this.handleChange}/>
                    <input type="submit"style={{flex:'1'}} />
                </form>
                {todos}
            </div>
        )
    }
}
