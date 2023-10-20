import reviews from './data';
import { useState } from 'react';
import { FaQuoteRight, FaChevronRight, FaChevronLeft } from "react-icons/fa6";

const App = () => {
  const [index, setIndex] = useState(0)
  const { name, job, image, text } = reviews[index]

  const checkNumber = (number) => {
    if (number > reviews.length - 1) {
     return 0
    }
    if (number < 0) {
      return reviews.length - 1
    }
    return number
  }

  const prevReview = () => {
    const newReview = index - 1
    setIndex(checkNumber(newReview))
  }
  const nextReview = () => {
    setIndex((currentReview) => {
      const newReview = currentReview + 1
      return checkNumber(newReview)
    })
  }
  const randomReview = () => {
    let random = Math.floor(Math.random() * reviews.length)
    if (random === index) {
      random = random + 1
      // setIndex(checkNumber(random))
    }
    setIndex(checkNumber(random))
  }
  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btn-container">
          <button className="prev-btn"onClick={prevReview}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={nextReview}>
            <FaChevronRight />
          </button>
        </div>
        <button className="btn btn-hipster" onClick={randomReview}>surprise me </button>
      </article>
    </main>
  );

};
export default App;
