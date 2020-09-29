import React from "react"
import Todoitem from "./Todoitem";
import PropTypes from 'prop-types';

const Todos = ( props ) => {

    let todoList = props.todo.map( todo =>{
        return <Todoitem 
            key={todo.timestamp} 
            todoTask={todo}
            setCrossout={props.setCrossout}
            delTodoitem={props.delTodoitem}
        />
    });

    return (
        <React.Fragment>
            {todoList}
        </React.Fragment>
    )
}


// propTypes
Todos.propTypes= {
    todo: PropTypes.array.isRequired
}

export default Todos;