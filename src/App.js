import React from 'react'
import TodoList from "./todo/TodoList";
import Context from "./context";
import AddTodo from "./todo/AddTodo";

function App() {

    const [todos, setTodos] = React.useState([
        {id: 1, completed: false, title: 'To Do it Today!'},
        {id: 2, completed: true, title: 'To Do it yesterday!'},
        {id: 3, completed: false, title: 'To Do it Tomorrow!'},
        {id: 4, completed: false, title: 'To Do nothing...'}
    ])

    function toggleTodo(id) {
        setTodos(
            todos.map( todo => {
                if (todo.id === id){
                    todo.completed = !todo.completed
                }
                return todo
            })
        )
    }
    function removeTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    function addTodo(title){
        setTodos(todos.concat([
            {
                title,
                id: Date.now(),
                completed: false
            }
        ]))
    }

    return (
        <Context.Provider value={{ removeTodo }}>
            <div className="wrapper">
                <h1>React tutorial</h1>
                {todos.length ? (
                    <TodoList todos={todos} onToggle={toggleTodo}/>
                ) : (
                    <h2 className="todo-nothig">ToDo: nothing!</h2>
                )}
                <AddTodo onCreate={addTodo}/>
            </div>
        </Context.Provider>

    );
}

export default App;
