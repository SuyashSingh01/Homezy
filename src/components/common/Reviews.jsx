import { toast } from "react-toastify";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addReviews } from '../../Redux/slices/BookingSlice';

const Reviews = ({ placeId }) => {

  const dispatch = useDispatch();
  const { reviews ,bookings} = useSelector(state => state.bookings);
  const { user } = useSelector(state => state.auth);
  const [newReview, setNewReview] = useState({ username: "", rating: 0, comment: "" });

  const isBooked = bookings.find((booking) => {
    return booking.place === placeId
  });

  const handleSubmitReview = (e) => {
    e.preventDefault();
    try {
      if (!newReview.username || !newReview.comment || newReview.rating <= 0) {
        toast.error("Please complete all fields before submitting.");
        return;
      }
      const updatedReviews = {
        ...newReview, timestamp: new Date().toISOString().split("T")[0], userId: user?.uid,
        placeId: placeId,
      }
      dispatch(addReviews(updatedReviews));
      setNewReview({ username: "", rating: 0, comment: "" });

    }
    catch (err) {
      console.error(err.message);
      toast.error(err.message);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg mt-4 mb-8 py-4">

      <h2 className="text-2xl font-semibold mb-4 border-b py-2">Reviews</h2>
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
        <p className="text-gray-500 text-xl font-semibold text-center">No reviews yet. Be the first to leave one!</p>
      )}

      {/* Add a New Review */}
      {isBooked && (
      <form onSubmit={handleSubmitReview} className="mt-6 space-y-4">
        <h3 className="text-xl font-medium">Leave a Review</h3>
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-100"
          value={newReview.username}
          onChange={(e) => setNewReview({ ...newReview, username: e.target.value })}
        />

        <select
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-200"
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
      )}
    </div>
  );
};

export default Reviews;
