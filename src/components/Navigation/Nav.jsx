import { useTranslation } from 'react-i18next'
import './navigation.css'
import './navAnimation.css'
import logo from '../../../public/assets/img/arcadlogo_final.png'
import plImg from '../../../public/assets/img/pl.svg'
import enImg from '../../../public/assets/img/gb.svg'
import React, { useState } from 'react'
export default function Nav() {
	const { t, i18n } = useTranslation()
	const [isOpen, setIsOpen] = useState(false)

	const handleShow = () => {
		setIsOpen(!isOpen)
	}

	const handleSelectMenuItem = () => {
		setIsOpen(false)
	}

	const handlePlLng = () => {
		setIsOpen(false)
		i18n.changeLanguage('pl')
	}

	const handleEnLng = () => {
		setIsOpen(false)
		i18n.changeLanguage('en')
	}

	// const allNAvItems = document.querySelectorAll('.nav-link')
	// const navList = document.querySelector('.navbar-collapse')

	// allNAvItems.forEach(item =>
	// 	item.addEventListener('click', () => {
	// 		navList.classList.remove('show')
	// 	})
	// )

	return (
		<>
			<style jsx>
				{`
					#lngPl {
						display: ${i18n.language === 'pl' ? 'none' : 'block'};
					}
					#lngEn {
						display: ${i18n.language === 'en' ? 'none' : 'block'};
					}
					#navbarNavAltMarkup {
						display: ${isOpen ? 'block' : 'none'};
					}
					.fa-bars {
						transform: ${isOpen ? 'rotate(90deg)' : 'rotate(0)'};
					}
				`}
			</style>

			<nav className='navbar navbar-expand-lg position-fixed top-0 w-100 py-3 shadow-bg'>
				<div className='container'>
					<a className='navbar-brand' href='#'>
						<img className='logo' src={logo} alt='logo firmy arcadddg' />
					</a>
					<button onClick={handleShow} className='navbar-toggler' type='button'>
						<i className='fa-solid fa-bars'></i>
					</button>
					<div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
						<div className='navbar-nav ms-auto'>
							<a className='nav-link active' href='#home' onClick={handleSelectMenuItem}>
								{t('home')}
							</a>
							<a className='nav-link' href='#firm' onClick={handleSelectMenuItem}>
								{t('about')}
							</a>
							<a className='nav-link' href='#offer' onClick={handleSelectMenuItem}>
								{t('offer')}
							</a>
							<a className='nav-link' href='#portfolio' onClick={handleSelectMenuItem}>
								{t('portfolio')}
							</a>
							<a className='nav-link' href='#contact' onClick={handleSelectMenuItem}>
								{t('contact')}
							</a>
							<a className='nav-link' id='lngPl' href='#' onClick={handlePlLng}>
								<img className='lngImg' src={plImg} />
							</a>
							<a className='nav-link' id='lngEn' href='#' onClick={handleEnLng}>
								<img className='lngImg' src={enImg} />
							</a>
						</div>
					</div>
				</div>
			</nav>
		</>
	)
}
