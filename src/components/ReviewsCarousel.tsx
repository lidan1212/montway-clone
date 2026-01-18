"use client";

import { Star } from "lucide-react";

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
  {
    name: "Jennifer S.",
    rating: 5,
    review: "I'm so happy with Olympic Auto Transport's service. They were punctual, professional, and kept me updated throughout the process.",
    date: "September 18, 2024",
  },
  {
    name: "Robert B.",
    rating: 5,
    review: "Olympic Auto Transport delivered my car safely and on time. Their customer service was top-notch, and I'd use them again.",
    date: "September 19, 2024",
  },
  {
    name: "Anna W.",
    rating: 5,
    review: "Excellent service from Olympic Auto Transport. My car arrived in great condition, and their team was very professional.",
    date: "September 20, 2024",
  },
  {
    name: "Thomas C.",
    rating: 5,
    review: "Olympic Auto Transport made the process seamless. Their pricing was fair, and my car arrived without any issues.",
    date: "September 21, 2024",
  },
];

export default function ReviewsCarousel() {
  // Double the reviews for seamless infinite scroll
  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <section className="bg-white py-10 border-b overflow-hidden">
      <div className="container-custom mb-6">
        <p className="text-center text-gray-700 text-lg">
          Read what other customers say about their experience with one of the best rated auto transport companies:
        </p>
      </div>

      {/* Scrolling container */}
      <div className="relative">
        <div className="flex animate-scroll gap-4 hover:pause-animation">
          {duplicatedReviews.map((review, index) => (
            <div
              key={`${review.name}-${index}`}
              className="flex-shrink-0 w-72 bg-gray-50 rounded-lg p-5 border border-gray-100"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="font-semibold text-gray-900 text-sm">{review.name}</span>
                <div className="flex gap-0.5">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={`star-${i}-${review.name}-${index}`}
                      className="w-3 h-3 fill-[#F5C518] text-[#F5C518]"
                    />
                  ))}
                </div>
                <span className="text-[#F5C518] font-semibold text-sm">5.0</span>
              </div>
              <p className="text-gray-600 text-sm line-clamp-3 mb-2">{review.review}</p>
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <span>{review.date}</span>
                <img
                  src="https://ext.same-assets.com/290144988/2907112206.png"
                  alt="Google"
                  className="h-4"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
