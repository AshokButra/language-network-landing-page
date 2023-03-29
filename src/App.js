import LanguageVideo from './components/LanguageVideo'
import StartLearningFrench from './components/StartLearningFrench'
import WorthFrenchLearning from './components/WorthFrenchLearning'
import PaymentListLearning from './components/PaymentListLearning'
import LearningFrenchAtAnyAge from './components/LearningFrenchAtAnyAge'
import FaqsContainer from './components/FaqsContainer'
import HaveLearningFrenchToday from './components/HaveLearningFrenchToday'
import ContactComponent from './components/ContactComponent'

import './App.css'

const App = () => (
  <div className="bg-container">
    <div className="nav-header">
      <img
        src="https://res.cloudinary.com/dmw995kmc/image/upload/v1680074132/Tln_logo_u45bmj.svg"
        className="language-logo"
        alt="language"
      />
    </div>
    <div className="top-section">
      <h1 className="main-heading">
        Learn French online and gain the confidence to speak fluently.
      </h1>
      <p className="main-description">
        Learn about all the basics and wonders of the French Language by our
        renowned trainer and get professional guidance with native style
        speaking skills.
      </p>
      <button className="request-brochure" type="button">
        Request Brochure
      </button>
    </div>
    <LanguageVideo />
    <br />
    <StartLearningFrench />
    <br />
    <WorthFrenchLearning />
    <br />
    <PaymentListLearning />
    <br />
    <LearningFrenchAtAnyAge />
    <br />
    <FaqsContainer />
    <br />
    <HaveLearningFrenchToday />
    <br />
    <ContactComponent />
  </div>
)
export default App
