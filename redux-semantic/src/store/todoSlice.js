import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
	name: 'todos',
	name_other: 'mediumTodos',
	initialState: {
		todos: [],
		mediumTodos: [],
	},
	reducers: {
		// ОБЯЗАТЕЛЬНО ПИСАТЬ REDUCERS!!! (МНОЖЕСТВЕННОЕ ЧИСЛО!!!)
		addTodo(state, action) {
			state.todos.push({
				id: new Date().toISOString(),
				text: action.payload.text,
				completed: false,
			})

			console.log(action)
		},
		removeTodo(state, action) {
			state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
		},
		toggleTodo(state, action) {
			const toggledTodo = state.todos.find(
				todo => todo.id === action.payload.id
			)
			toggledTodo.completed = !toggledTodo.completed
		},

		addMediumTodo(state, action) {
			state.mediumTodos.push({
				id: new Date().toISOString(),
				text: action.payload.text,
				completed: false,
			})
		},
	},
})

export const { addTodo, removeTodo, toggleTodo, addMediumTodo } =
	todoSlice.actions

export default todoSlice.reducer
