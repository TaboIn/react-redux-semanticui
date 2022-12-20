import React from 'react'
import TodoMediumItem from './MediumTodoItem'
import { useSelector } from 'react-redux'

const MediumTodoList = () => {
	const todos = useSelector(state => state.mediumTodos.mediumTodos)

	return (
		<ul className='grid grid-cols-3'>
			{todos.map(todo => (
				<TodoMediumItem key={todo.id} {...todo} />
			))}
		</ul>
	)
}

export default MediumTodoList
