import { useTranslation } from 'react-i18next'
import './firm.css'

export default function Firm() {
	const { t } = useTranslation()
	return (
		<>
			<section id='firm' className=' text-center py-5 px-5'>
				<h2 class='section-title'>{t('about')}</h2>
				<div class='underline'></div>

				<div>
					<p>
						<span className='blue-text'>{t('firm.description.name')}</span>
						{t('firm.description.part1')}
					</p>
					<p>{t('firm.description.part2')}</p>
					<p>{t('firm.description.part3')}</p>
					<p>{t('firm.description.part4')}</p>
					<p>
						{t('firm.description.part5')}
						<span className='blue-text'>{t('firm.description.part6')}</span>
					</p>
				</div>
			</section>
		</>
	)
}
