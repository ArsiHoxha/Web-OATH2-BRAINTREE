import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import PricingComponent from './components/price/PriceComponent';
import Testimonial from './components/testamontial/Testomential';
import AboutUs from './components/About/About';
import ContactFormSection from './components/contact/Contact';
import Projects from './components/Projects/Project';
import WhyUs from './components/whyus/WhyUS';
function App() {
  return (
      <div className="App">
        <Navbar></Navbar>
        <Testimonial></Testimonial>
        <WhyUs></WhyUs>
        <PricingComponent></PricingComponent>
        <ContactFormSection></ContactFormSection>
      </div>
  );
}

export default App;
