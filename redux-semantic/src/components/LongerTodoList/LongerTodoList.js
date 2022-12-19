import React from 'react'
import TodoItem from '../UrgentTodoLists/UrgentTodoItem'
import { useSelector } from 'react-redux'

const LongerTodoList = () => {
	const todos = useSelector(state => state.longerTodos.longerTodos)

	return (
		<ul className='grid grid-cols-3 '>
			{todos.map(todo => (
				<TodoItem key={todo.id} {...todo} />
			))}
		</ul>
	)
}

export default LongerTodoList