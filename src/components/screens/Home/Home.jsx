import React, { useState } from 'react'
import CreateTodoField from './create-todo-field/CreateTodoField'
import TodoItem from './item/TodoItem'

const Home = () => {
	const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todolist')) || []);

	const changeTodo = id => {
		const copy = [...todos]
		const current = copy.find(t => t._id === id)
		current.isCompleted = !current.isCompleted
		setTodos(copy)
        localStorage.setItem('todolist', JSON.stringify(copy))
	}

	const removeTodo = id => 
		setTodos([...todos].filter(t => t._id !== id))
	localStorage.setItem('todolist', JSON.stringify(todos))

	return (
		<div className='text-white w-4/5 mx-auto'>
			<h1 className='text-2xl font-bold text-center mb-10'>Список заданий</h1>
			{todos.map(todo => (
				<TodoItem
					key={todo._id}
					todo={todo}
					changeTodo={changeTodo}
					removeTodo={removeTodo}
				/>
			))}
			<CreateTodoField setTodos={setTodos} />
		</div>
	)
}

export default Home