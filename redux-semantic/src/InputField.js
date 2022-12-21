import React from 'react'
import { Button, Input, ButtonGroup } from 'semantic-ui-react'

const InputFiled = ({ 
	text, 
	handleInput, 
	handleUrgentSubmit, 
	handleMediumSubmit,
	handleLongerSubmit
}) => {
	return (
		<label>
			<Input
				className='p-6 font-bold'
				placeholder='Введите задачу...'
				value={text}
				onChange={event => handleInput(event.target.value)}
			/>
			{text.length > 0 ? (
				<ButtonGroup>
					<Button onClick={handleUrgentSubmit} color='red'>
						Краткосрочные
					</Button>
					<Button onClick={handleMediumSubmit} color='teal'>
						Среднесрочные
					</Button>
					<Button onClick={handleLongerSubmit} color='blue'>
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
