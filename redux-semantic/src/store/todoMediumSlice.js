import { createSlice } from '@reduxjs/toolkit'

const todoMediumSlice = createSlice({
	name: 'mediumTodos',
	initialState: {
		mediumTodos: [],
	},
	reducers: {
		// ОБЯЗАТЕЛЬНО ПИСАТЬ REDUCERS!!! (МНОЖЕСТВЕННОЕ ЧИСЛО!!!)
		addMediumTodo(state, action) {
			state.mediumTodos.push({
				id: new Date().toISOString(),
				text: action.payload.text,
				completed: false,
			})
		},
		removeMediumTodo(state, action) {
			state.mediumTodos = state.mediumTodos.filter(
				todo => todo.id !== action.payload.id
			)
		},
		toggleMediumTodo(state, action) {
			const toggledTodo = state.mediumTodos.find(
				todo => todo.id === action.payload.id
			)
			toggledTodo.completed = !toggledTodo.completed
		},
	},
})

export const { removeMediumTodo, toggleMediumTodo, addMediumTodo } =
	todoMediumSlice.actions

export default todoMediumSlice.reducer
