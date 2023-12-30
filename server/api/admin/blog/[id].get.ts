import data from '@/mock/admin-post.json'

export default defineEventHandler(async event => {
	// const config = useRuntimeConfig()
	const id = getRouterParam(event, 'id')

	console.log('id ', id)

	await new Promise(resolve => {
		setTimeout(() => {
			resolve(true)
		}, 2000)
	})

	return data
})
