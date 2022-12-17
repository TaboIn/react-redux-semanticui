import './App.css'
import { useState } from 'react'
import InputField from './components/InputFiled'
import { useDispatch } from 'react-redux'
import { addTodo } from './store/todoSlice'
import ModalWindow from './components/ModalWindow'
import TodoList from './components/TodoList'
import MediumList from './components/MediumList'

function App() {
	const [text, setText] = useState('')
	const dispatch = useDispatch()

	const addTask = () => {
		dispatch(addTodo({ text }))
		setText('')
	}

	return (
		<>
			<div className='App bg-emerald-100 h-screen'>
				<InputField text={text} handleInput={setText} handleSubmit={addTask} />
				{text.length > 0 ? null : <p className='font-bold'>Заполните поле!</p>}
				<div className='flex justify-center items-center '>
					<ModalWindow
						urgency={'Срочные задачи'}
						urgentTask={'Краткосрочные задачи'}
						color={'red'}
						list={<TodoList />}
					/>
					<ModalWindow
						urgency={'Среднесрочные задачи'}
						urgentTask={'Среднесрочные задачи'}
						color={'teal'}
					/>
					<ModalWindow
						urgency={'Долгосрочные задачи'}
						urgentTask={'Долгосрочные задачи'}
						color={'blue'}
					/>
				</div>
			</div>
		</>
	)
}

export default App
