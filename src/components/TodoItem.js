import React, { Component } from 'react'

export default class TodoItem extends Component {

    todoItemStyle =()=> {return({
        backgroundColor:'#f3f3f3',
        padding:'10px',
        borderBottom:'1px dotted black',
        textDecoration: this.props.todo.completed? 'line-through':'none' 
    })}
    

    changeComplete = ()=>{
       return  this.props.handleItemCheck(this.props.todo.id);
    }
    handleDelete = () => {
        return this.props.handleDelete(this.props.todo.id);
    }
    render() {
        return (
            <div>
                <div style={this.todoItemStyle()}>
                    <input type="checkbox" checked={this.props.todo.completed} onChange={this.changeComplete}/>
                    {this.props.todo.title}
                    <button style={deleteButton} onClick={this.handleDelete}>X</button>
                </div>
                
            </div>
        )
    }
}
const deleteButton = {
    backgroundColor:'#ff0000',
    color:'#fff',
    border:'none',
    padding:'5px 9px',
    borderRadius:'50%',
    cursor:'pointer',
    float:'right'

}