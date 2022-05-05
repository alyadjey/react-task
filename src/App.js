import React, { useEffect, useState, Suspense } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Header from './components/UI/navbar/Navbar'

import AppRouter from './components/AppRouter'

import '../src/styles/App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { AuthContext } from './context'
import Loader from './components/UI/Loader/Loader'
import Footer from './components/UI/footer/footer'

function App() {
	const [isAuth, setIsAuth] = useState(false)

	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		if (localStorage.getItem('auth')) {
			setIsAuth(true)
		}
		setIsLoading(false)
	}, [])
	return (
		<Suspense fallback={<Loader />}>
			<AuthContext.Provider value={{ isAuth, setIsAuth: setIsAuth, isLoading }}>
				<Router>
					<Header />
					<AppRouter />
					<Footer />
				</Router>
			</AuthContext.Provider>
		</Suspense>
	)
}

export default App
