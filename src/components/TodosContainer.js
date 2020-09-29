import React,{ useState, useEffect }from 'react'
import TodoAdder from './TodoAdder'
import Todos from './Todos'
import { db, auth } from '../firebaseSetup'


const TodosContainer = () => {

    const [state,setState] = useState({
        // todos:[
        //   {
        //     id:uuid.v4(),
        //     title:"Finish Learning React",
        //     completed:false
        //   },
        //   {
        //     id:uuid.v4(),
        //     title:"Practice React",
        //     completed:false
        //   },
        //   {
        //     id:uuid.v4(),
        //     title:"Keep on Practicing with projects",
        //     completed:true
        //   },
        //   {
        //   id:uuid.v4(),
        //   title:"Study hard and smart!",
        //   completed:true
        //   },  
        // ]
      });

    // on mount attach listener and remove while unmounting
    useEffect(() => {
        console.log("entering TodosContainer.useEffect");

        const fetchTodosListenerUnsubscribe = db.collection('users').doc(auth.currentUser.uid).onSnapshot( snapshot => {
            console.log("entering fetchTodosListener");
            setState({todos: snapshot.data().todos});
        })

        return () => {
            console.log("entering fetchTodos.cleanup");

            fetchTodosListenerUnsubscribe();
        }
    }, [])

    const delTodoitem = (taskTitle) => {
        let updatedTodosState = state.todos.filter( todo => todo.title !== taskTitle);

        db.collection('users').doc(auth.currentUser.uid).update({
            todos: updatedTodosState
        })
        
    }

    const addTodoitem = (title) => {
        const newTodo = {
            title: title,
            completed: false,
            timestamp: new Date(),
            position: state.todos.length
        }

        state.todos.push(newTodo);

        db.collection('users').doc(auth.currentUser.uid).update({
            todos: state.todos,
        })

    }

    const setCrossout = ( title ) =>{
        let updatedTodosState = state.todos.map( currTodo => {
            if(currTodo.title === title){
                currTodo.completed = !currTodo.completed;
            }
            return currTodo;
        });
        
        db.collection('users').doc(auth.currentUser.uid).update({
            todos: updatedTodosState
        })
    }

    return (
        <>
            <TodoAdder addTodoitem={addTodoitem} />

            { (state.todos && state.todos.length !== 0) 
                ? (
                <Todos 
                    todo = {state.todos} 
                    setCrossout = {setCrossout}
                    delTodoitem = {delTodoitem}
                />
                ) : <h2 style={{textAlign:"center"}}>No Todos Listed</h2>
            }
        </>
    )
}

export default TodosContainer
