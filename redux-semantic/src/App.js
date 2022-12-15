import './App.css'
import { useState } from 'react'
import InputField from './components/InputFiled'
import { useDispatch } from 'react-redux'
import { addTodo } from './store/todoSlice'
import ModalWindow from './components/ModalWindow'

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
				{text.length > 0 ? null : <p>Заполните поле!</p>}
				
				
				<ModalWindow />
			</div>
		</>
	)
}

export default App
