import { defineStore } from 'pinia'
import { useMainStore } from '@/stores/main'

interface Credentials {
	email: string
	password: string
}

export interface AuthState {
	_token: string | null
}

export const useAuthStore = defineStore('auth', {
	state: (): AuthState => ({
		_token: true
	}),

	actions: {
		async login(credentials: Credentials) {
			try {
				const { clearError } = useMainStore()
				clearError()

				const response: string = await new Promise((resolve, reject) => {
					setTimeout(() => resolve('mock-token'), 2000)
					// setTimeout(() => reject(new Error('Ошибка авторизации')), 2000)
				})

				this._token = response
			} catch (e) {
				const { setError } = useMainStore()
				setError(e)

				throw e
			}
		},

		async logout(credentials: Credentials) {
			await new Promise(resolve => {
				setTimeout(() => resolve(true), 2000)
			})

			this._token = null
		},

		async create() {
			try {
				await new Promise(resolve => {
					setTimeout(() => resolve(true), 2000)
				})

				console.log('пользователь добавлен')
			} catch (e) {
				const { setError } = useMainStore()
				setError(e)

				throw e
			}
		}
	},

	getters: {
		isAuthenticated: state => Boolean(state._token)
	}
})
