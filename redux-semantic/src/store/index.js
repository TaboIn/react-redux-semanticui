import { configureStore } from '@reduxjs/toolkit'
import todoUrgentReducer from './todoUrgentSlice'
import todoMediumReducer from './todoMediumSlice'
import todoLongerReducer from './todoLongerSlice'

export default configureStore({
	reducer: {
		urgentTodos: todoUrgentReducer,
		mediumTodos: todoMediumReducer,
		longerTodos: todoLongerReducer,
	},
})
