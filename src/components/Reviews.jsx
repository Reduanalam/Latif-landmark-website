import { useState, useEffect, useRef } from "react";
import {
  FaStar,
  FaQuoteLeft,
  FaChevronLeft,
  FaChevronRight,
  FaGoogle,
} from "react-icons/fa";
import "./Reviews.css";

const reviews = [
  {
    id: 1,
    name: "Mohammad Rafiqul Islam",
    location: "Dhaka, Bangladesh",
    rating: 5,
    date: "January 2025",
    avatar: "MR",
    text: "Latif Landmark exceeded every expectation. The plot I purchased in Araihazar has all promised utilities in place.",
    tag: "Araihazar Plot",
  },
  {
    id: 2,
    name: "Farida Begum",
    location: "Narayanganj",
    rating: 5,
    date: "March 2025",
    avatar: "FB",
    text: "I was hesitant to invest in land but their team walked me through every step.",
    tag: "Bashundhara Residential",
  },
  {
    id: 3,
    name: "Kamal Hossain",
    location: "Chattogram",
    rating: 5,
    date: "November 2024",
    avatar: "KH",
    text: "The post-sale support is what sets Latif Landmark apart.",
    tag: "North Jatrabari",
  },
  {
    id: 4,
    name: "Sumaiya Akter",
    location: "Dhaka",
    rating: 5,
    date: "February 2025",
    avatar: "SA",
    text: "As a first-time buyer I was nervous. The sales team helped me find the right plot.",
    tag: "Araihazar Plot",
  },
  {
    id: 5,
    name: "Abdul Karim Miah",
    location: "Sylhet",
    rating: 5,
    date: "December 2024",
    avatar: "AK",
    text: "A colleague recommended Latif Landmark. I visited the site and was impressed.",
    tag: "Bashundhara Residential",
  },
];

function StarRating({ rating }) {
  return (
    <div className="review-stars">
      {[...Array(5)].map((_, i) => (
        <FaStar key={i} className="star-filled" />
      ))}
    </div>
  );
}

export default function Reviews() {
  const [active, setActive] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const intervalRef = useRef(null);

  const cardsToShow = 3;

  const next = () => {
    setActive((prev) => (prev + 1) % reviews.length);
  };

  const prev = () => {
    setActive((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  useEffect(() => {
    intervalRef.current = setInterval(next, 5000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const visibleReviews = [];
  for (let i = 0; i < cardsToShow; i++) {
    visibleReviews.push(reviews[(active + i) % reviews.length]);
  }

  return (
    <section className="reviews-section">
      <div className="reviews-header">
        <p className="section-label">Client Testimonials</p>
        <h2 className="section-title">What Our Clients Say About Us</h2>
      </div>

      {!showAll && (
        <div className="reviews-slider">
          <button className="arrow left" onClick={prev}>
            <FaChevronLeft />
          </button>

          <div className="reviews-grid">
            {visibleReviews.map((review) => (
              <div className="review-card" key={review.id}>
                <div className="review-card-header">
                  <span className="review-tag">{review.tag}</span>
                  <FaQuoteLeft className="quote-icon" />
                </div>

                <p className="review-text">{review.text}</p>

                <StarRating rating={review.rating} />

                <div className="review-footer">
                  <div className="review-user">
                    <div className="avatar">{review.avatar}</div>

                    <div className="user-info">
                      <strong className="user-name">{review.name}</strong>
                      <span className="user-location">{review.location}</span>
                      <span className="user-date">{review.date}</span>
                    </div>
                  </div>

                  <div className="google-badge">
                    <FaGoogle />
                    <span>Verified</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="arrow right" onClick={next}>
            <FaChevronRight />
          </button>
        </div>
      )}

      {showAll && (
        <div className="reviews-all-grid">
          {reviews.map((review) => (
            <div className="review-card" key={review.id}>
              <div className="review-card-header">
                <span className="review-tag">{review.tag}</span>
                <FaQuoteLeft className="quote-icon" />
              </div>

              <p className="review-text">{review.text}</p>

              <StarRating rating={review.rating} />

              <div className="review-footer">
                <div className="review-user">
                  <div className="avatar">{review.avatar}</div>

                  <div className="user-info">
                    <strong className="user-name">{review.name}</strong>
                    <span className="user-location">{review.location}</span>
                    <span className="user-date">{review.date}</span>
                  </div>
                </div>

                <div className="google-badge">
                  <FaGoogle />
                  <span>Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="view-all-wrapper">
        <button onClick={() => setShowAll(!showAll)}>
          {showAll ? "Show Less" : "View All Reviews"}
        </button>
      </div>
    </section>
  );
}