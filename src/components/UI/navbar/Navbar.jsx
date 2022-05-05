import { useTranslation } from 'react-i18next'
import '../../../utils/i18next'
import React, { useContext } from 'react'
import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../../../context'
import { useTheme } from '../../../hooks/useTheme'
import MyButton from '../button/MyButton'
import logo from './logo192.png'

const Header = () => {
	const { t, i18n } = useTranslation()
	const changleLanguage = lang => {
		i18n.changeLanguage(lang)
	}
	const { isAuth, setIsAuth } = useContext(AuthContext)
	const logout = () => {
		setIsAuth(false)
		localStorage.removeItem('auth')
	}
	const { theme, setTheme } = useTheme()
	const handleLightThemeClick = () => {
		setTheme('light')
	}
	const handleDarkThemeClick = () => {
		setTheme('dark')
	}
	return (
		<>
			<Navbar collapseOnSelect expand='md' fixed='top'>
				<Container>
					<Navbar.Brand>
						<img src={logo} height='30' width='30' className='d-inline-block align-top' alt='Logo'></img>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls='responsive-navbar-nav' />
					<Navbar.Collapse id='responsive-navbar-nav'>
						<Nav className='me-auto'>
							<NavLink
								to='/about'
								style={({ isActive }) => {
									return {
										color: isActive ? '#11b533' : 'var(--text-color)',
									}
								}}
							>
								{t('Unsplash Photo Search')}
							</NavLink>
							<NavLink
								to='/posts'
								style={({ isActive }) => {
									return {
										color: isActive ? '#11b533' : 'var(--text-color)',
									}
								}}
							>
								{t('Posts')}
							</NavLink>
						</Nav>
						<Form onSubmit={event => event.preventDefault()} className='d-flex'>
							<a
								onClick={() => changleLanguage('ua')}
								style={{
									background: 'url("https://www.101domain.ua/images/flags/large/UA.png"',
									backgroundPosition: 'center',
								}}
								className='mx-2'
							></a>
							<a
								onClick={() => changleLanguage('en')}
								style={{
									background: 'url("https://www.seekpng.com/png/full/5-51298_british-flag-england-flag.png"',
									backgroundSize: 'contain',
								}}
							></a>
							<MyButton onClick={handleLightThemeClick}>{t('Light')}</MyButton>
							<MyButton onClick={handleDarkThemeClick}>{t('Dark')}</MyButton>
							<MyButton onClick={logout} className='me-2'>
								{t('Exit')}
							</MyButton>
						</Form>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	)
}

export default Header
