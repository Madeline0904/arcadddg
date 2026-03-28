import { useTranslation } from 'react-i18next'

import './offer.css'
export default function Offer() {
	const { t } = useTranslation()
	return (
		<>
			<section id='offer' className=' firm_img  offer py-5 px-5'>
				<h2 className='section-title'>{t('offer')}</h2>
				<div className='underline'></div>
				<div className='position'>
					<div className='row'>
						<div className='col-sm-6 col-md-4 text-center offer-hover'>
							<p className='offer-card-text'>
								<i className='fa-regular fa-gem small-icon-diamond'></i>
								{t('offerText.text7')}
							</p>
						</div>
						<div className='col-sm-6 col-md-4 text-center offer-hover'>
							<p className='offer-card-text'>
								{' '}
								<i className='fa-regular fa-gem small-icon-diamond'></i>
								{t('offerText.text8')}
							</p>
						</div>
						<div className='col-sm-6 col-md-4 text-center offer-hover'>
							<p className='offer-card-text'>
								{' '}
								<i className='fa-regular fa-gem small-icon-diamond'></i>
								{t('offerText.text3')}
							</p>
						</div>
						<div className='col-sm-6 col-md-4 text-center offer-hover'>
							<p className='offer-card-text'>
								{' '}
								<i className='fa-regular fa-gem small-icon-diamond'></i>
								{t('offerText.text4')}
							</p>
						</div>
						<div className='col-sm-6 col-md-4 text-center offer-hover'>
							<p className='offer-card-text'>
								{' '}
								<i className='fa-regular fa-gem small-icon-diamond'></i>
								{t('offerText.text5')}
							</p>
						</div>
						<div className='col-sm-6 col-md-4 text-center offer-hover'>
							<p className='offer-card-text'>
								{' '}
								<i className='fa-regular fa-gem small-icon-diamond'></i>
								{t('offerText.text6')}
							</p>
						</div>
						<div className='col-sm-6 col-md-4 text-center offer-hover'>
							<p className='offer-card-text'>
								{' '}
								<i className='fa-regular fa-gem small-icon-diamond'></i>
								{t('offerText.text1')}
							</p>
						</div>
						<div className='col-sm-6 col-md-4 text-center offer-hover'>
							<p className='offer-card-text'>
								{' '}
								<i className='fa-regular fa-gem small-icon-diamond'></i>
								{t('offerText.text2')}
							</p>
						</div>

						<div className='firm_shadow'></div>
					</div>
				</div>
			</section>
		</>
	)
}
