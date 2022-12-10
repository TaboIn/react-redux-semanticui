import './App.css'
import { useState } from 'react'
import TodoList from './components/TodoList'
import InputField from './components/InputFiled'
import { useDispatch } from 'react-redux'
import { addTodo } from './store/todoSlice'

function App() {
	const [text, setText] = useState('')
	const dispatch = useDispatch()

	const addTask = () => {
		dispatch(addTodo({ text }))
		setText('')
	}

	return (
		<>
			<div className='App'>
				{text.length > 0 ? <p>Отлично</p> : <p>Заполните поле!</p>}
				<InputField text={text} handleInput={setText} handleSubmit={addTask} />
				<TodoList />
			</div>
		</>
	)
}

export default App
