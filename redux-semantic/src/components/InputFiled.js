import React from 'react'
import { Button, Input, ButtonGroup } from 'semantic-ui-react'

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
				<ButtonGroup>
					<Button onClick={handleSubmit} color='red'>
						Краткосрочные
					</Button>
					<Button onClick={handleSubmit} color='teal'>
						Среднесрочные
					</Button>
					<Button onClick={handleSubmit} color='blue'>
						Долгосрочные
					</Button>
				</ButtonGroup>
			) : (
				<ButtonGroup>
					<Button disable={true} color='red'>
						Краткосрочные
					</Button>
					<Button disable={true} color='teal'>
						Среднесрочные
					</Button>
					<Button disable={true} color='blue'>
						Долгосрочные
					</Button>
				</ButtonGroup>
			)}
		</label>
	)
}

export default InputFiled
