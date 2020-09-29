import React from 'react'
import PropTypes from "prop-types";

export default function Todoitem(props) {
    let {completed} = props.todoTask;
    
    const todoStyles= {
        textTransform:"capitalize",
        textDecoration:completed?"line-through":"none",
        backgroundColor:completed?"darkslategray":"darkgoldenrod",
        color:completed?"goldenrod":"whitesmoke" 
    }

    return (
        <React.Fragment>
            <div className="todoItem" style={todoStyles}>
                <input 
                    type="checkbox" 
                    checked={props.todoTask.completed} 
                    onChange={props.setCrossout.bind(this, props.todoTask.title)}
                />
                <span>
                    {props.todoTask.title}
                </span>
                <i className="fas fa-trash-alt fa-lg delIcon" onClick={props.delTodoitem.bind(this,props.todoTask.title)}></i>
            </div>
        </React.Fragment>
            
       
    )
}



Todoitem.propTypes={
    todoTask:PropTypes.object.isRequired
}