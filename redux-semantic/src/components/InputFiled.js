import React from 'react'
import { Button, Input } from 'semantic-ui-react'


const InputFiled = ({ text, handleInput, handleSubmit }) => {

	
	return (
		<label>
			<Input 
			className='p-4' 
			placeholder='Введите задачу...' 
			value={text} 
			onChange={event => handleInput(event.target.value)} 

			/>
			{text.length > 0 ? (
				<Button  onClick={handleSubmit}>Add Todo</Button>
			) : (
				<Button  disable={true}>Add Todo</Button>
			)}
		</label>
	)
}

export default InputFiled
