import { createSlice } from '@reduxjs/toolkit'

const todoLongerSlice = createSlice({
	name: 'longerTodos',
	initialState: {
		longerTodos: [],
	},
	reducers: {
		// ОБЯЗАТЕЛЬНО ПИСАТЬ REDUCERS!!! (МНОЖЕСТВЕННОЕ ЧИСЛО!!!)
		addLongerTodo(state, action) {
			state.longerTodos.push({
				id: new Date().toISOString(),
				text: action.payload.text,
				completed: false,
			})
		},
		removeLongerTodo(state, action) {
			state.longerTodos = state.longerTodos.filter(
				todo => todo.id !== action.payload.id
			)
		},
		toggleLongerTodo(state, action) {
			const toggledTodo = state.longerTodos.find(
				todo => todo.id === action.payload.id
			)
			toggledTodo.completed = !toggledTodo.completed
		},
	},
})

export const { removeLongerTodo, toggleLongerTodo, addLongerTodo } =
	todoLongerSlice.actions

export default todoLongerSlice.reducer
