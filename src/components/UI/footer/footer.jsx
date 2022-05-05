import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import './footer.css'
import PostService from '../../../API/PostService'
import { useFetching } from '../../../hooks/useFetching'
import Loader from '../Loader/Loader'
import MyButton from '../button/MyButton'

const Footer = () => {
	const [weather, setWeather] = useState([])
	const [clientWeatherId, setClientWeatherId] = useState('84f734dfa0b9c07c535743ba01acb2ea')

	const [fetchWeather, isWeatherLoading, weatherError] = useFetching(async () => {
		const response = await PostService.getWeather(clientWeatherId)
		setWeather(response.data)
	})

	useEffect(() => {
		fetchWeather()
	}, [])

	return (
		<footer className='footer'>
			<Container fluid>
				<Container>
					<div className='row'>
						{isWeatherLoading ? (
							<Loader />
						) : (
							<div className='weather'>
								<div className='weather__header'>
									<div className='weather__main'>
										<div className='weather__city'>{weather.name}</div>
										<div className='weather__status'>{weather.weather?.[0].main}</div>
									</div>
									<div className='weather__icon'>
										<img
											src={`http://openweathermap.org/img/w/${weather.weather?.[0].icon}.png`}
											alt={weather.weather?.[0].main}
										></img>
									</div>
								</div>
								<div className='weather__temp'>{Math.round(weather.main?.temp)}</div>
								<div className='weather__feels-like'>Feels like:{Math.round(weather.main?.feels_like)}</div>
							</div>
						)}
						<div className='footer-col'>
							<h4>company</h4>
							<ul>
								<li>
									<span>about me</span>
								</li>
								<li>
									<span>my services</span>
								</li>
								<li>
									<span>privacy policy</span>
								</li>
								<li>
									<span>affiliate program</span>
								</li>
							</ul>
						</div>
						<div className='footer-col'>
							<h4>get help</h4>
							<ul>
								<li>
									<span>FAQ</span>
								</li>
								<li>
									<span>shipping</span>
								</li>
								<li>
									<span>returns</span>
								</li>
								<li>
									<span>order status</span>
								</li>
								<li>
									<span>payment options</span>
								</li>
							</ul>
						</div>
						<div className='footer-col'>
							<h4>online shop</h4>
							<ul>
								<li>
									<span>watch</span>
								</li>
								<li>
									<span>bag</span>
								</li>
								<li>
									<span>shoes</span>
								</li>
								<li>
									<span>dress</span>
								</li>
							</ul>
						</div>
						<div className='footer-col'>
							<h4>follow me</h4>
							<div className='social-links'>
								<span>
									<i className='fab fa-facebook-f'></i>
								</span>
								<span>
									<i className='fab fa-twitter'></i>
								</span>
								<span>
									<i className='fab fa-instagram'></i>
								</span>
								<span>
									<i className='fab fa-linkedin-in'></i>
								</span>
							</div>
						</div>
					</div>
				</Container>
			</Container>
		</footer>
	)
}

export default Footer
