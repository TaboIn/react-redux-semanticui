import { createSlice } from '@reduxjs/toolkit'

const todoUrgentSlice = createSlice({
	name: 'urgentTodos',
	initialState: {
		urgentTodos: [],
	},
	reducers: {
		// ОБЯЗАТЕЛЬНО ПИСАТЬ REDUCERS!!! (МНОЖЕСТВЕННОЕ ЧИСЛО!!!)
		addUrgentTodo(state, action) {
			state.urgentTodos.push({
				id: new Date().toISOString(),
				text: action.payload.text,
				completed: false,
			})
		},
		removeUrgentTodo(state, action) {
			state.urgentTodos = state.urgentTodos.filter(
				todo => todo.id !== action.payload.id
			)
		},
		toggleUrgentTodo(state, action) {
			const toggledTodo = state.urgentTodos.find(
				todo => todo.id === action.payload.id
			)
			toggledTodo.completed = !toggledTodo.completed
		},
	},
})

export const { removeUrgentTodo, toggleUrgentTodo, addUrgentTodo } =
	todoUrgentSlice.actions

export default todoUrgentSlice.reducer
