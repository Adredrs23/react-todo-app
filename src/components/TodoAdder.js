import React, { useState } from 'react'
import Blank from "./Blank"

const TodoAdder = ( props ) => {

    const [state, setState] = useState({
        todoText:"",
        isBlank:false,
    })

    const setFocusBlank = (event) => {
        let {name,value} =event.target
        if(value.length!==0){
            setState({[name]:value,isBlank:false})
        }else{
            setState({[name]:"",isBlank:true,})
        }
    }

    const handleTodoTextState = (event) => {
        let {name,value} = event.target;
        setState({
            [name]:value,
            isBlank: value.length!==0 ? false : true,
        })
    }

    const setBlurBlank = (event) => {
        let {name,value} =event.target
        if(value.length!==0){
            setState({[name]:value,isBlank:false})
        }else{
            setState({[name]:"",isBlank:false,})
        }
    }

    const handleTodoAddition = () => {
        if(state.todoText.length === 0){
            setState({todoText:'',isBlank:true})
        }            
        else{
            props.addTodoitem(state.todoText)
            setState({todoText:'',isBlank:false})
        }
    }

    return (
        <React.Fragment>
            <div className="todoAdd">
                <input 
                    placeholder="Add New Task"
                    name="todoText"
                    onChange={handleTodoTextState}
                    onBlur={setBlurBlank}
                    onFocus={setFocusBlank}
                    value={state.todoText}
                />
                <i 
                    className="fas fa-plus-square fa-3x" 
                    onClick={handleTodoAddition}
                >
                </i>
            </div>
                {state.isBlank?<Blank />:null} 
        </React.Fragment>
    )
}

export default TodoAdder
