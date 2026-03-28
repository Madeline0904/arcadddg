
import './App.css'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Nav from './components/Navigation/Nav'
import Offer from './components/Offer/Offer'
import Portfolio from './components/Portfolio/Portfolio'
import Firm from './components/Firm/Firm'

function App() {
  document.addEventListener('DOMContentLoaded', function () {
	const nav = document.querySelector('.navbar')
	const allNAvItems = document.querySelectorAll('.nav-link')
	const navList = document.querySelector('.navbar-collapse')



	function addShadow() {
		if (window.scrollY >= 200) {
			nav.classList.add('shadow-bg')
		} else {
			nav.classList.remove('shadow-bg')
		}
	}

	allNAvItems.forEach(item =>
		item.addEventListener('click', () => {
			navList.classList.remove('show')
		})
	)

  window.addEventListener('scroll', addShadow)})

  return (
    <>
    <Nav/>
    <Header/>

   <Firm/>
      <Offer/>
   <Portfolio/>
   <Contact/>
   <Footer 
   
   />
    </>
  )
}

export default App
