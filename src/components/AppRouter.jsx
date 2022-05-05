import React, { useContext } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { AuthContext } from '../context'
import Login from '../pages/Login'
import Posts from '../pages/Posts'
import { publicRoutes, privateRoutes } from '../router/routes'
import Loader from './UI/Loader/Loader'

const AppRouter = () => {
	const { isAuth, setIsAuth, isLoading } = useContext(AuthContext)

	if (isLoading) {
		return <Loader />
	}
	return isAuth ? (
		<Routes>
			{privateRoutes.map(route => (
				<Route element={route.element} path={route.path} exact={route.exact} key={route.path} />
			))}
			<Route path='login' element={isAuth ? <Navigate replace to='/posts' /> : <Login />} />
			<Route path='' element={isAuth ? <Navigate replace to='/posts' /> : <Login />} />
		</Routes>
	) : (
		<Routes>
			{publicRoutes.map(route => (
				<Route element={route.element} path={route.path} exact={route.exact} key={route.path} />
			))}
			<Route path='posts' element={!isAuth ? <Navigate replace to='/login' /> : <Posts />} />
			<Route path='' element={!isAuth ? <Navigate replace to='/login' /> : <Posts />} />
		</Routes>
	)
}
export default AppRouter
