import { defineStore } from 'pinia'

interface Credentials {
	email: string
	password: string
}

export interface AuthState {
	token: string | null
}

export const useAuthStore = defineStore('auth', {
	state: (): AuthState => ({
		token: null
	}),

	actions: {
		async login(credentials: Credentials) {
			const response: string = await new Promise(resolve => {
				setTimeout(() => resolve('mock-token'), 2000)
			})

			this.token = response
		},

		async logout() {
			await new Promise(resolve => {
				setTimeout(() => resolve(true), 2000)
			})

			this.token = null
		}
	},

	getters: {
		isAuthenticated: state => Boolean(state.token)
	}
})
