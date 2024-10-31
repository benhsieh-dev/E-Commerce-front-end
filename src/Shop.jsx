import './Shop.css';
import HeroSection from './components/HeroSection/HeroSection.jsx';
import Navigation from './components/Navigation/Navigation.jsx'

export default function Shop() {
  return (
    <div className='App'>
      <Navigation />
      <HeroSection />
    </div>
  )
}