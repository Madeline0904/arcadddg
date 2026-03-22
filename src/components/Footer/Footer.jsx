import { useTranslation } from 'react-i18next'
export default function Footer(){
    const { t } = useTranslation()

const handleCurrentYear = () => {
		const year = new Date().getFullYear()
		
	}
	handleCurrentYear()

    return(
        <>
          <footer className="bg-dark text-light py-4 text-center">
    <p class="mb-0">&copy; <span className="footer__year"></span> | ARCAD DDG | {t('header.nameOfCompany')} | {t('contactDetails.name.madeBy')}</p>
  </footer>


        </>
    )
}