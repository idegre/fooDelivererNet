import { AxiosError } from 'axios'
import { RootActions } from '../combineActions'

const initialState = {
	blocks: {}
}

export type State = {
}

export const reducer = (state: State = initialState, action: RootActions) => {
	switch (action.type) {
		
		default:
			return {
				...state
			}
	}
}
