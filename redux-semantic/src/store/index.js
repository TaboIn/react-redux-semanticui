import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './todoSlice'
import todoMediumReducer from './todoMediumSlice'

export default configureStore({
	reducer: {
		todos: todoReducer,
		mediumTodos: todoMediumReducer,
	},
})
