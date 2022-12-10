import React from 'react'

const InputFiled = ({ text, handleInput, handleSubmit }) => {
	return (
		<label>
			<input value={text} onChange={event => handleInput(event.target.value)} />
			{text.length > 0 ? (
				<button onClick={handleSubmit}>Add Todo</button>
			) : (
				<button disable={true}>Add Todo</button>
			)}
		</label>
	)
}

export default InputFiled
