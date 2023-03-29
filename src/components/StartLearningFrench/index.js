import './index.css'

const StartLearningFrench = () => (
  <div className="start-learning-french-container">
    <p className="start-learning-french-description">
      Gain Mastery on all levels of CEFR (The Common European Framework of
      Reference for Languages: Learning, teaching, assessment): A1, A2, B1, B2,
      C1, C2 of the French Language
    </p>
    <div className="cards-container">
      <div className="card">
        <div className="top-section">
          <p className="para">ABSOLUTE BEGINNER</p>
          <h1 className="head">A1</h1>
        </div>
        <div className="sentence-container">
          <div className="sentence">
            <img
              src="https://res.cloudinary.com/dmw995kmc/image/upload/v1680073833/check_mark_300x_lrr5j5.png"
              className="correct-icon"
              alt="tick"
            />
            <p className="para1">Use familiar everyday expressions</p>
          </div>
          <div className="sentence">
            <img
              src="https://res.cloudinary.com/dmw995kmc/image/upload/v1680073833/check_mark_300x_lrr5j5.png"
              className="correct-icon"
              alt="tick"
            />
            <p className="para1">Introduce yourself and others</p>
          </div>
          <div className="sentence">
            <img
              src="https://res.cloudinary.com/dmw995kmc/image/upload/v1680073833/check_mark_300x_lrr5j5.png"
              className="correct-icon"
              alt="tick"
            />
            <p className="para1">Interact in a simple conversation</p>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="top-section">
          <p className="para">BEGINNER</p>
          <h1 className="head">A2</h1>
        </div>
        <div className="sentence-container">
          <div className="sentence">
            <img
              src="https://res.cloudinary.com/dmw995kmc/image/upload/v1680073833/check_mark_300x_lrr5j5.png"
              className="correct-icon"
              alt="tick"
            />
            <p className="para1">Can understand familiar topics</p>
          </div>
          <div className="sentence">
            <img
              src="https://res.cloudinary.com/dmw995kmc/image/upload/v1680073833/check_mark_300x_lrr5j5.png"
              className="correct-icon"
              alt="tick"
            />
            <p className="para1">Can communicate routine tasks</p>
          </div>
          <div className="sentence">
            <img
              src="https://res.cloudinary.com/dmw995kmc/image/upload/v1680073833/check_mark_300x_lrr5j5.png"
              className="correct-icon"
              alt="tick"
            />
            <p className="para1">Can describe your background</p>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="top-section">
          <p className="para">INTERMEDIATE</p>
          <h1 className="head">B1</h1>
        </div>
        <div className="sentence-container">
          <div className="sentence">
            <img
              src="https://res.cloudinary.com/dmw995kmc/image/upload/v1680073833/check_mark_300x_lrr5j5.png"
              className="correct-icon"
              alt="tick"
            />
            <p className="para1">Discuss basics like work, school etc</p>
          </div>
          <div className="sentence">
            <img
              src="https://res.cloudinary.com/dmw995kmc/image/upload/v1680073833/check_mark_300x_lrr5j5.png"
              className="correct-icon"
              alt="tick"
            />
            <p className="para1">Handle situations whilst travelling</p>
          </div>
          <div className="sentence">
            <img
              src="https://res.cloudinary.com/dmw995kmc/image/upload/v1680073833/check_mark_300x_lrr5j5.png"
              className="correct-icon"
              alt="tick"
            />
            <p className="para1">Understand text on familiar topics</p>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="top-section">
          <p className="para">INTERMEDIATE</p>
          <h1 className="head">B2</h1>
        </div>
        <div className="sentence-container">
          <div className="sentence">
            <img
              src="https://res.cloudinary.com/dmw995kmc/image/upload/v1680073833/check_mark_300x_lrr5j5.png"
              className="correct-icon"
              alt="tick"
            />
            <p className="para1">Can understand complex texts</p>
          </div>
          <div className="sentence">
            <img
              src="https://res.cloudinary.com/dmw995kmc/image/upload/v1680073833/check_mark_300x_lrr5j5.png"
              className="correct-icon"
              alt="tick"
            />
            <p className="para1">Can talk with native speakers</p>
          </div>
          <div className="sentence">
            <img
              src="https://res.cloudinary.com/dmw995kmc/image/upload/v1680073833/check_mark_300x_lrr5j5.png"
              className="correct-icon"
              alt="tick"
            />
            <p className="para1">Can write and explain viewpoints</p>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="top-section">
          <p className="para">ADVANCED</p>
          <h1 className="head">C1</h1>
        </div>
        <div className="sentence-container">
          <div className="sentence">
            <img
              src="https://res.cloudinary.com/dmw995kmc/image/upload/v1680073833/check_mark_300x_lrr5j5.png"
              className="correct-icon"
              alt="tick"
            />
            <p className="para1">Can read and write complicated texts</p>
          </div>
          <div className="sentence">
            <img
              src="https://res.cloudinary.com/dmw995kmc/image/upload/v1680073833/check_mark_300x_lrr5j5.png"
              className="correct-icon"
              alt="tick"
            />
            <p className="para1">Can express yourself fluently</p>
          </div>
          <div className="sentence">
            <img
              src="https://res.cloudinary.com/dmw995kmc/image/upload/v1680073833/check_mark_300x_lrr5j5.png"
              className="correct-icon"
              alt="tick"
            />
            <p className="para1">Can use language creatively</p>
          </div>
        </div>
      </div>
    </div>
    <button className="start-learning-french-online-button" type="button">
      Start Learning French Online
    </button>
  </div>
)

export default StartLearningFrench
