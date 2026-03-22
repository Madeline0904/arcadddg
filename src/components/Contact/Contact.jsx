import { useTranslation } from 'react-i18next'
import './contact.css'


export default function Contact() {
  const { t } = useTranslation()
    return (
        <>
           <section id="contact" class="contact py-5">
      <h2 class="section-title">{t('contact')}</h2>
      <div class="underline"></div>
      <div class="container container-contact">
        
          
          <div class="col-sm-6 contact-item text-center">
            <h3>{t('contactDetails.name.title')}</h3>
            <p><i class="fa-solid fa-mobile-screen-button"></i> <a href="tel:+48 575 288 929 ">+48 575 288 929</a> </p>
            <p><i class="fa-solid fa-envelope"></i> <a href="mailto:biuro.arcadddg@op.pl">biuro.arcadddg@op.pl</a></p>
            <a href="google.pl"
              target="_blank"><i class="fab fa-facebook-f"></i></a>
          </div>
        </div>
      
      <div class="contact-shadow"></div>
    </section>
        </>
    )
}