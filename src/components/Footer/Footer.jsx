import { useTranslation } from 'react-i18next'
export default function Footer() {
	const { t } = useTranslation()
	return (
		<>
			<footer className='bg-dark text-light py-4 text-center'>
				<p class='mb-0'>
					<span className='footer__year'>{new Date().getFullYear()}</span> | &copy; ARCAD DDG |{' '}
					{t('header.nameOfCompany')} | {t('contactDetails.name.madeBy')}
				</p>
			</footer>
		</>
	)
}
