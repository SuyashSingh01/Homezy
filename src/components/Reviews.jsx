import React, { useState } from "react";
import { toast } from "react-toastify";

const Reviews = ({ placeId }) => {
  const [reviews, setReviews] = useState([
    { username: "John Doe", rating: 5, comment: "Great place!", timestamp: "2024-12-01" },
    { username: "Jane Smith", rating: 4, comment: "Nice and cozy.", timestamp: "2024-12-02" },
  ]);

  const [newReview, setNewReview] = useState({ username: "", rating: 0, comment: "" });

  const handleSubmitReview = (e) => {
    e.preventDefault();
    if (!newReview.username || !newReview.comment || newReview.rating <= 0) {
      toast.console.error("Please complete all fields before submitting.");
      return;
    }

    const updatedReviews = [
      ...reviews,
      { ...newReview, timestamp: new Date().toISOString().split("T")[0] },
    ];
    setReviews(updatedReviews);
    setNewReview({ username: "", rating: 0, comment: "" });
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mt-8">
      <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Reviews</h2>

      {/* Display Existing Reviews */}
      {reviews.length > 0 ? (
        <div className="space-y-4">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-4 border border-gray-200 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <p className="text-lg font-medium">{review.username}</p>
                <p className="text-yellow-500 font-semibold">{`${review.rating} / 5`}</p>
              </div>
              <p className="text-gray-700 mt-2">{review.comment}</p>
              <p className="text-sm text-gray-500 mt-1">{review.timestamp}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No reviews yet. Be the first to leave one!</p>
      )}

      {/* Add a New Review */}
      <form onSubmit={handleSubmitReview} className="mt-6 space-y-4">
        <h3 className="text-xl font-medium">Leave a Review</h3>

        <input
          type="text"
          placeholder="Your Name"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
          value={newReview.username}
          onChange={(e) => setNewReview({ ...newReview, username: e.target.value })}
        />

        <select
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
          value={newReview.rating}
          onChange={(e) => setNewReview({ ...newReview, rating: parseInt(e.target.value) })}
        >
          <option value="0">Rate this place (1-5)</option>
          {[1, 2, 3, 4, 5].map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>

        <textarea
          placeholder="Write your review here..."
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
          rows="4"
          value={newReview.comment}
          onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
        ></textarea>

        <button
          type="submit"
          className="bg-primary  text-white font-medium px-6 py-2 rounded-md hover:shadow-lg hover:bg-primary-dark"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default Reviews;
