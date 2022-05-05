import axios from 'axios'

export default class PostService {
	static async getAll(limit = 10, page = 1) {
		const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
			params: {
				_limit: limit,
				_page: page,
			},
		})
		return response
	}

	static async getById(id) {
		const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
		return response
	}
	static async getCommentByPostId(id) {
		const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
		return response
	}
	static async getPhoto(photo, clientId) {
		const response = await axios.get(
			`https://api.unsplash.com/search/photos?pahe=1&query=${photo}&client_id=${clientId}`
		)
		return response
	}
	static async getWeather(clientWeatherId) {
		const response = await axios.get(
			`https://api.openweathermap.org/data/2.5/weather?units=metric&q=Kyiv&appid=${clientWeatherId}`
		)
		return response
	}
}
