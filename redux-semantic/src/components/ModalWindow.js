import React, { useReducer } from 'react'
import { Button, Modal } from 'semantic-ui-react'

function exampleReducer(state, action) {
	switch (action.type) {
		case 'OPEN_MODAL':
			return { open: true, dimmer: action.dimmer }
		case 'CLOSE_MODAL':
			return { open: false }
		default:
			throw new Error()
	}
}

function ModalExampleDimmer({ urgency, urgentTask, color, list }) {
	const [state, dispatch] = useReducer(exampleReducer, {
		open: false,
		dimmer: undefined,
	})
	const { open, dimmer } = state

	return (
		<div className='p-8'>
			<Button
				onClick={() => dispatch({ type: 'OPEN_MODAL', dimmer: 'blurring' })}
				color={color}
			>
				{urgency}
			</Button>

			<Modal
				size='large'
				dimmer={dimmer}
				open={open}
				onClose={() => dispatch({ type: 'CLOSE_MODAL' })}
			>
				<Modal.Header>{urgentTask}</Modal.Header>
				<Modal.Content>{list}</Modal.Content>
				<Modal.Actions>
					<Button negative onClick={() => dispatch({ type: 'CLOSE_MODAL' })}>
						Close
					</Button>
				</Modal.Actions>
			</Modal>
		</div>
	)
}

export default ModalExampleDimmer
