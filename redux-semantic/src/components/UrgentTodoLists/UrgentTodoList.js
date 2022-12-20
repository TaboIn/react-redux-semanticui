import React from 'react'
import TodoItem from './UrgentTodoItem'
import { useSelector } from 'react-redux'

const UrgentTodoList = () => {
	const todos = useSelector(state => state.urgentTodos.urgentTodos)

	return (
		<ul className='grid grid-cols-3 '>
			{todos.map(todo => (
				<TodoItem key={todo.id} {...todo} />
			))}
		</ul>
	)
}

export default UrgentTodoList
