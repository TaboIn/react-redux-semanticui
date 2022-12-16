import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
	name: 'todos',
	initialState: {
		todos: [],
	},
	reducers: {
		// ОБЯЗАТЕЛЬНО ПИСАТЬ REDUCERS!!! (МНОЖЕСТВЕННОЕ ЧИСЛО!!!)
		addTodo(state, action) {
			state.todos.push({
				id: new Date().toISOString(),
				text: action.payload.text,
				completed: false,
			})
		},
		removeTodo(state, action) {
			state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
		},
		toggleTodo(state, action) {
			const toggledTodo = state.todos.find(
				todo => todo.id === action.payload.id
			)
			const test = []
			test.push(toggledTodo.completed)
			console.log(test)
			test.length = 0

			toggledTodo.completed = !toggledTodo.completed
		},
		removeChoose(state, action) {
			const removeChoose = state.todos.find(todo => todo.id === action.payload.id)
			const test = []
			test.push(removeChoose)
			test.length = 0
		}
	},
})

export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions

export default todoSlice.reducer
