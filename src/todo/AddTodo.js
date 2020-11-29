import React, {useState} from 'react'
import PropTypes from 'prop-types'

function AddTodo({ onCreate }) {
    const [value, setValue] = useState('')

    function submitHandler(event){
        event.preventDefault()

        if (value.trim()){
            onCreate(value)
            setValue('')
        }
    }
    return (
        <form className="add-todo" onSubmit={submitHandler}>
            <input type="text"
                   className="add-todo__input"
                   value={value}
                   onChange={event => setValue(event.target.value)}
            />
            <button type="submit" className="add-todo__btn">Add todo!</button>
        </form>
    )
}

AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired
}

export default AddTodo