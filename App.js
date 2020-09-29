// import React, { Component } from 'react'
// import './App.css';
// import Todos from "./components/Todos"
// import Header from "./components/Header"
// import TodoAdder from "./components/TodoAdder"
// import {BrowserRouter as Router,Route} from "react-router-dom"
// import About from "./components/About"
// import axios from "axios"

// // import uuid from "uuid";

//  class App extends Component {
//     state={
//       todos: []
//     }
  
//   componentDidMount(){
//     axios.get('https://jsonplaceholder.typicode.com/todos?_limit=4')
//     .then(resp=>{
//       this.setState({todos:resp.data})
//     })
//   }

//   setCrossout=(id)=>{
//     this.setState(prevState=>{
//       let updatedTodosState = prevState.todos.map(currTodo=>{
//           if (currTodo.id ===id) {
//             currTodo.completed=!currTodo.completed
//           }
//           return currTodo
//       })
//       return updatedTodosState;
//     })
//   }

//   delTodoitem=(id)=>{
//     console.log(id)
//     axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
//     .then(resp=>{
//       this.setState({todos:[...this.state.todos.filter(currTodo=>currTodo.id!== id)]})
//     })
//   }

//   addTodoitem=(text)=>{
//     const newTodo={
//       title:text,
//       completed:false
//     }
//     axios.post('https://jsonplaceholder.typicode.com/todos',newTodo)
//     .then(resp=>{
//       this.setState({todos:[...this.state.todos,resp.data]})
//     }
//     )
//   }
  
//   render() {
//     return (
//       <Router>
//         <div>
//           <Header />
//           <Route path="/"  exact render={props=>(
//             <React.Fragment>
//               <TodoAdder addTodoitem={this.addTodoitem}/>
//               <Todos 
//                 todo={this.state.todos} 
//                 setCrossout = {this.setCrossout}
//                 delTodoitem = {this.delTodoitem}
//               />
//             </React.Fragment>
//           )}>
//           </Route>
//           <Route path="/about" component={About}></Route>
//         </div>
//       </Router>
//     )
//   }
// }


// export default App;

