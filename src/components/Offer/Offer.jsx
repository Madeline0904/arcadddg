import { useTranslation } from 'react-i18next'
import './offer.css'

export default function Offer() {
  const { t } = useTranslation()
    return (
        <>
<section id="offer" className="offer bg-light py-5 ">
      <div className="container">
        <h2 className="section-title">{t('offer')}</h2>
        <div className="underline"></div>
        <div className="row text-center">
          
          <div className="col-sm-6 col-md-4 text-center  offer-hover">
           <p className="offer-card-text"><i className="fa-regular fa-gem small-icon-diamond"></i>{t('offerText.text1')}</p>
          </div>
         <div className="col-sm-6 col-md-4 text-center offer-hover">
            <p className="offer-card-text"> <i className="fa-regular fa-gem small-icon-diamond"></i>{t('offerText.text2')}</p>
          </div>
         <div className="col-sm-6 col-md-4 text-center offer-hover">
            <p className="offer-card-text"> <i className="fa-regular fa-gem small-icon-diamond"></i>{t('offerText.text3')}</p>
          </div>
          <div className="col-sm-6 col-md-4 text-center offer-hover">
            <p className="offer-card-text"> <i className="fa-regular fa-gem small-icon-diamond"></i>{t('offerText.text4')}</p>
          </div>
          <div className="col-sm-6 col-md-4 text-center offer-hover">
            
            <p className="offer-card-text"> <i className="fa-regular fa-gem small-icon-diamond"></i>{t('offerText.text5')}</p>
          </div>
          <div className="col-sm-6 col-md-4 text-center offer-hover">
    
            <p className="offer-card-text"> <i className="fa-regular fa-gem small-icon-diamond"></i>{t('offerText.text6')}</p>
          </div>
           {/* <div className="col-sm-6 col-md-4 text-center offer-hover">
    
            <p className="offer-card-text"> <i className="fa-regular fa-gem small-icon-diamond"></i>{t('offerText.text7')}</p>
          </div>
           <div className="col-sm-6 col-md-4 text-center offer-hover">
    
            <p className="offer-card-text"> <i className="fa-regular fa-gem small-icon-diamond"></i>{t('offerText.text8')}</p>
          </div> */}
  
        </div>
      </div>
    </section>
        </>
    )
}