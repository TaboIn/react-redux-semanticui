import React from 'react'
import { useDispatch } from 'react-redux'
import { removeTodo, toggleTodo } from '../store/todoSlice'
import {Button} from 'semantic-ui-react'

const TodoItem = ({ id, text, completed }) => {
	const dispatch = useDispatch()

	return (
		<div className='w-full flex justify-center items-center content-center py-6 '>
			<div className='flex py-4 h-[2rem] text-lg font-bold items-center justify-center'>
				<div className='flex border border-indigo-500 p-4 bg-slate-300 rounded-lg'>
					<li className=''>
						<input
							type='checkbox'
							checked={completed}
							onChange={() => dispatch(toggleTodo({ id }))}
						/>
						<span className='text-lg'>{text}</span>
						<Button size='mini' negative onClick={() => dispatch(removeTodo({ id }))}>
							remove
						</Button>
					</li>
				</div>
			</div>
		</div>
	)
}

export default TodoItem
