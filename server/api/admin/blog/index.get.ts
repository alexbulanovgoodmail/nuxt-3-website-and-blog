import data from '@/mock/admin-posts.json'

export default defineEventHandler(async () => {
	await new Promise(resolve => {
		setTimeout(() => {
			resolve(true)
		}, 2000)
	})

	return data
})
