import React from 'react'
import { useDispatch } from 'react-redux'
import { removeLongerTodo, toggleLongerTodo } from '../../store/todoLongerSlice'
import { Button } from 'semantic-ui-react'

const TodoItem = ({ id, text, completed }) => {
	const dispatch = useDispatch()

	const handleChange = () => {
		if (completed) {
			dispatch(removeLongerTodo({ id }))
		}
	}

	return (
		<div className='w-full justify-center items-center content-center py-6 '>
			<div className='flex py-4 h-[2rem] text-lg font-bold items-center justify-center'>
				<div className='border border-indigo-500 p-4 bg-sky-100 rounded-lg '>
					<li>
						<input
							type='checkbox'
							checked={completed}
							onChange={() => dispatch(toggleLongerTodo({ id }))}
						/>

						<span className='text-xl'>{text}</span>
						<Button size='mini' negative onClick={handleChange}>
							X
						</Button>
					</li>
				</div>
			</div>
		</div>
	)
}

export default TodoItem
