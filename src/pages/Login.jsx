import React, { useContext } from 'react'
import MyButton from '../components/UI/button/MyButton'
import MyInput from '../components/UI/input/MyInput'
import { AuthContext } from '../context'

const Login = () => {
	const { isAuth, setIsAuth } = useContext(AuthContext)
	const login = event => {
		event.preventDefault()
		setIsAuth(true)
		localStorage.setItem('auth', 'true')
	}
	return (
		<div style={{ marginTop: 70, minHeight: '52vh' }}>
			<h1>Login</h1>
			<form onSubmit={login}>
				<MyInput type='text' placeholder='Login' />
				<MyInput type='password' placeholder='Password' />
				<MyButton>Enter</MyButton>
			</form>
		</div>
	)
}

export default Login
