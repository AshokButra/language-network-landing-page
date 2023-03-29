import './index.css'

const PaymentListLearning = () => (
  <div className="payment-container">
    <h1 className="our-french-course-prices">Our French Course Prices</h1>
    <div className="top-card">
      <div className="personal-learning-container">
        <h1 className="personal-learning">Personal Learning</h1>
        <p className="teacher-student">(1 Teacher & 1 Student)</p>
      </div>
      <div className="group-learning-container">
        <h1 className="group-learning">Group Learning</h1>
        <p className="teacher-student">(1 Teacher & 6 Student)</p>
      </div>
    </div>
    <div className="price-cards-list">
      <div className="card1">
        <p className="french-intro">Introduction to French</p>
        <p className="level">Level A1</p>
        <p className="price">₹11990</p>
        <p className="curriculum-includes">Curriculum includes</p>
        <p className="pay-description">
          Basic greetings and introduction, Phonotics Grammer and Vocabulary
        </p>
        <p className="view-detailed-curriculum">View detailed Curriculum</p>
        <button type="button" className="buy-now">
          BUY NOW
        </button>
      </div>
      <div className="card1">
        <p className="french-intro">Elementary Knowledge</p>
        <p className="level">Level A2</p>
        <p className="price">₹16790</p>
        <p className="curriculum-includes">Curriculum includes</p>
        <p className="pay-description">
          Simple communication Grammer and Vocabulary
        </p>
        <p className="view-detailed-curriculum">View detailed Curriculum</p>
        <button type="button" className="buy-now">
          BUY NOW
        </button>
      </div>
      <div className="card1">
        <p className="french-intro">Intermediate Knowledge</p>
        <p className="level">Level B1</p>
        <p className="price">₹35980</p>
        <p className="curriculum-includes">Curriculum includes</p>
        <p className="pay-description">
          Cultural & Social know-hows Complex Grammer and Professional
          Vocabulary
        </p>
        <p className="view-detailed-curriculum">View detailed Curriculum</p>
        <button type="button" className="buy-now">
          BUY NOW
        </button>
      </div>
      <div className="card1">
        <p className="french-intro">Professional Knowledge</p>
        <p className="level">Level B2</p>
        <p className="price">₹38980</p>
        <p className="curriculum-includes">Curriculum includes</p>
        <p className="pay-description">
          Degree of fluency, Express Opinions Complex Grammer Structures
        </p>
        <p className="view-detailed-curriculum">View detailed Curriculum</p>
        <button type="button" className="buy-now">
          BUY NOW
        </button>
      </div>
    </div>
  </div>
)

export default PaymentListLearning
