import React from 'react'
import TodoLongerItem from './LongerTodoItem'
import { useSelector } from 'react-redux'

const LongerTodoList = () => {
	const todos = useSelector(state => state.longerTodos.longerTodos)

	return (
		<ul className='grid grid-cols-3 '>
			{todos.map(todo => (
				<TodoLongerItem key={todo.id} {...todo} />
			))}
		</ul>
	)
}

export default LongerTodoList
