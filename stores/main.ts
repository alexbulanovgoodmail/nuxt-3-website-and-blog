import { defineStore } from 'pinia'

export interface MainState {
	_error: any
}

export const useMainStore = defineStore('main', {
	state: (): MainState => ({
		_error: null
	}),

	actions: {
		setError(e: any) {
			this._error = e
		},
		clearError() {
			this._error = null
		}
	},

	getters: {
		error: state => state._error
	}
})
