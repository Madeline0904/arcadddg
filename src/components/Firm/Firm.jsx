import { useTranslation } from 'react-i18next'
import './firm.css'
export default function Firm() {
	const { t } = useTranslation()
	return (
		<>
			<section id='firm' className='firm firm_img py-5  text-center'>
				<h2 class='section-title'>{t('about')}</h2>
				<div class='underline'></div>

				<div className='firm-text-container'>
					<p className='firm-text'>
						<span className='blue-text'>{t('firm.description.name')}</span>
						{t('firm.description.part1')}
						<span className='blue-text'>{t('firm.description.part2')}</span>
					</p>
				</div>
				<div className='firm_shadow'></div>
			</section>
		</>
	)
}
