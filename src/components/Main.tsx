import React from 'react'
import Header from './Header'
import FeatureSection from './FeatureSection'
import Info from './Info'
import PortfolioSection from './PortfolioSection'
import ContactSection from './ContactSection'
import Footer from './Footer'
import '../styles/Main.scss'
const Main = () => {
  return (
    <div>
      <Header />
      <FeatureSection />
      <Info />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default Main
