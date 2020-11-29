import React, { useEffect } from 'react'
import TodoList from "./todo/TodoList";
import Context from "./context";
import AddTodo from "./todo/AddTodo";
import Loader from "./todo/Loader";

function App() {

    const [todos, setTodos] = React.useState([
        // {id: 1, completed: false, title: 'To Do it Today!'},
        // {id: 2, completed: true, title: 'To Do it yesterday!'},
        // {id: 3, completed: false, title: 'To Do it Tomorrow!'},
        // {id: 4, completed: false, title: 'To Do nothing...'}
    ])
    const [loading, setLoading] = React.useState(true)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
            .then(response => response.json())
            .then(todos => {
                // todo: for Loader work demonstration
                setTimeout(() => {
                    setTodos( todos )
                    setLoading( false )
                }, 2000)
                // setTodos( todos )
            })
    }, [])

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
                {loading && <Loader />}
                {todos.length ? (
                    <TodoList todos={todos} onToggle={toggleTodo}/>
                ) : (
                    loading ? null : <h2 className="todo-nothig">ToDo: nothing!</h2>
                )}
                <AddTodo onCreate={addTodo}/>
            </div>
        </Context.Provider>

    );
}

export default App;
