import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import PostService from '../API/PostService'
import MyButton from '../components/UI/button/MyButton'
import MyInput from '../components/UI/input/MyInput'
import Loader from '../components/UI/Loader/Loader'
import { useFetching } from '../hooks/useFetching'

const About = () => {
	const { t } = useTranslation()
	const [photo, setPhoto] = useState('')
	const [clientId, setCliendId] = useState('s7Y7zYbixFKJ5yTmpCb_5mc59lg6S5WQRcfmkIGE344')
	const [result, setResult] = useState([])
	function getSearch(event) {
		setPhoto(event.target.value)
	}
	const [fetchPhoto, isLoading, error] = useFetching(async () => {
		const response = await PostService.getPhoto(photo, clientId)
		setResult(response.data.results)
		console.log(result)
	})

	return (
		<div style={{ padding: 15, minHeight: '61vh' }}>
			<h1>Unsplash Photo Search in React</h1>
			<MyInput onChange={getSearch} type='text' name='photo' placeholder='Search for Photos...' />
			<MyButton onClick={fetchPhoto} type='submit'>
				{t('Search')}
			</MyButton>
			{isLoading ? (
				<Loader />
			) : (
				<div style={{ flexWrap: 'wrap', display: 'flex', justifyContent: 'center' }}>
					{result.map(photo => (
						<img src={photo.urls.small} key={photo.id} style={{ width: '33%', height: '50vh', padding: '20px 20px' }} />
					))}
				</div>
			)}
		</div>
	)
}

export default About
