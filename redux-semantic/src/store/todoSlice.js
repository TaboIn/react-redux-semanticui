import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
	name: 'todos',
	name_other: 'mediumTodos',
	initialState: {
		todos: [],
		mediumTodos: [],
		longerTodos: [],
	},
	reducers: {
		// ОБЯЗАТЕЛЬНО ПИСАТЬ REDUCERS!!! (МНОЖЕСТВЕННОЕ ЧИСЛО!!!)
		addUrgentTodo(state, action) {
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
			toggledTodo.completed = !toggledTodo.completed
		},
		addMediumTodo(state, action) {
			state.mediumTodos.push({
				id: new Date().toISOString(),
				text: action.payload.text,
				completed: false,
			})
		},
		removeMediumTodo(state, action) {
			state.mediumTodos = state.mediumTodos.filter(todo => todo.id !== action.payload.id)
		},
		toggleMediumTodo(state, action) {
			const toggledMediumTodo = state.mediumTodos.find(
				todo => todo.id === action.payload.id
			)
			toggledMediumTodo.completed = !toggledMediumTodo.completed
		},
		addLongerTodo(state, action) {
			state.longerTodos.push({
				id: new Date().toISOString(),
				text: action.payload.text,
				completed: false,
			})
		},
		removeLongerTodo(state, action) {
			state.longerTodos = state.longerTodos.filter(todo => todo.id !== action.payload.id)
		},
		toggledLongerTodo(state, action) {
			const toggledLongerTodo = state.longerTodos.find(
				todo => todo.id === action.payload.id
			)
			toggledLongerTodo.completed = !toggledLongerTodo.completed
		}
	},
})

export const { removeTodo, toggleTodo, addUrgentTodo, addMediumTodo, addLongerTodo } =
	todoSlice.actions

export default todoSlice.reducer
