import './App.css'
import { useState } from 'react'
import InputField from './components/UrgentTodoLists/UrgentInputFiled'
import { useDispatch } from 'react-redux'
import { addUrgentTodo, addLongerTodo } from './store/todoSlice'
import { addMediumTodo } from './store/todoMediumSlice'
import ModalWindow from './components/ModalWindow'
import UrgentList from './components/UrgentTodoLists/UrgentTodoList'
import MediumList from './components/MediumTodoList/MediumTodoList'
import LongerList from './components/LongerTodoList/LongerTodoList'

function App() {
	const [text, setText] = useState('')
	const dispatch = useDispatch()

	const addUrgentTask = () => {
		dispatch(addUrgentTodo({ text }))
		setText('')
	}
	const addMediumTask = () => {
		dispatch(addMediumTodo({ text }))
		setText('')
	}
	const addLongerTask = () => {
		dispatch(addLongerTodo({ text }))
		setText('')
	}

	return (
		<>
			<div className='App bg-emerald-100 h-screen'>
				<InputField
					text={text}
					handleInput={setText}
					handleUrgentSubmit={addUrgentTask}
					handleMediumSubmit={addMediumTask}
					handleLongerSubmit={addLongerTask}
				/>
				{text.length > 0 ? null : <p className='font-bold'>Заполните поле!</p>}
				<div className='flex justify-center items-center '>
					<ModalWindow
						urgency={'Срочные задачи'}
						urgentTask={'Краткосрочные задачи'}
						color={'red'}
						list={<UrgentList />}
					/>
					<ModalWindow
						urgency={'Среднесрочные задачи'}
						urgentTask={'Среднесрочные задачи'}
						color={'teal'}
						list={<MediumList />}
					/>
					<ModalWindow
						urgency={'Долгосрочные задачи'}
						urgentTask={'Долгосрочные задачи'}
						color={'blue'}
						list={<LongerList />}
					/>
				</div>
			</div>
		</>
	)
}

export default App
