import { createSlice } from "@reduxjs/toolkit";

const bookingSlice = createSlice({
  name: "bookings",
  initialState: {
    bookings: [],
  },
  reducers: {
    addBooking(state, action) {
      state.bookings.push(action.payload);
    },
    cancelBooking(state, action) {
      state.bookings = state.bookings.filter(
        (booking) => booking.id !== action.payload
      );
    },
    setBookings(state, action) {
      state.bookings = action.payload; 
    },
  },
});

export const { addBooking, cancelBooking, setBookings } = bookingSlice.actions;
export default bookingSlice.reducer;
