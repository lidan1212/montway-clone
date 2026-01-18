"use client";

import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    name: "Emily R.",
    rating: 5,
    review: "Olympic Auto Transport exceeded my expectations. Their team was responsive, and my car was delivered in perfect condition. I'll definitely use them again!",
    date: "September 14, 2024",
  },
  {
    name: "Michael P.",
    rating: 5,
    review: "Olympic Auto Transport made shipping my car stress-free. Their team was professional, and the delivery was right on time. Highly recommend!",
    date: "September 15, 2024",
  },
  {
    name: "Sarah L.",
    rating: 5,
    review: "I had a fantastic experience with Olympic Auto Transport. Their communication was clear, and my car arrived in perfect condition.",
    date: "September 16, 2024",
  },
  {
    name: "David H.",
    rating: 5,
    review: "Olympic Auto Transport is the best! Their pricing is competitive, and they handled my car with great care during transport.",
    date: "September 17, 2024",
  },
];

export default function ReviewsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="bg-white py-12 border-b">
      <div className="container-custom">
        <p className="text-center text-gray-700 mb-8 text-lg">
          Read what other customers say about their experience with one of the best rated auto transport companies:
        </p>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {reviews.map((review, index) => (
                <div
                  key={`${review.name}-${index}`}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-gray-50 rounded-xl p-8 text-center">
                    <div className="font-semibold text-gray-900 mb-2">{review.name}</div>
                    <div className="flex justify-center gap-1 mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star
                          key={`star-${i}-${review.name}`}
                          className="w-5 h-5 fill-[#F5C518] text-[#F5C518]"
                        />
                      ))}
                      <span className="ml-2 text-[#F5C518] font-semibold">5.0</span>
                    </div>
                    <p className="text-gray-700 mb-4">{review.review}</p>
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                      <span>{review.date}</span>
                      <img
                        src="https://ext.same-assets.com/290144988/2907112206.png"
                        alt="Google"
                        className="h-5 ml-2"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevReview}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <button
            onClick={nextReview}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition"
            aria-label="Next review"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>

          <div className="flex justify-center gap-2 mt-6">
            {reviews.map((_, index) => (
              <button
                key={`dot-${reviews[index].name}-${index}`}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-[#F5C518]" : "bg-gray-300"
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
