import { useTranslation } from 'react-i18next'
import './header.css'

export default function Header() {
	const { t } = useTranslation()
	return (
		<header className='hero-img' id='home'>
			<div className='hero-text text-center p-2'>
				<h1 data-aos='fade-up' data-aos-delay='200'>
					ARCAD<span className='blue-text'>DDG</span>
				</h1>
				<p data-aos='fade-up' data-aos-delay='400'>
					{t('header.nameOfCompany')}
				</p>
				<a data-aos='fade-up' data-aos-delay='600' href='#offer' className='btn btn-outline-light mt-2 text-uppercase '>
					{t('header.checkoffer')}
				</a>
			</div>
			<div className='hero-shadow'></div>
			<a href='#offer'>
				<i className='fa-regular fa-gem bounce-top'></i>
			</a>
		</header>
	)
}
