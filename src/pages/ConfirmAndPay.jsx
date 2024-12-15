import React from "react";
import { Select, Button, Input } from "antd";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { format } from 'date-fns';

const ConfirmAndPay = () => {

  const params = useParams();
  const bookingid = params.id;
  const { bookings } = useSelector(state => state.bookings);
  const booking = bookings.find(book => book.place === parseInt(bookingid));
  console.log("bookingsDetail", bookings);

  console.log("bookingDetailtype", typeof booking);
  console.log("bookingDetail", booking);

  let checkin = "N/A";
  let checkout = "N/A";

  if (booking?.checkIn && booking?.checkOut) {
    const checkInDate = new Date(booking.checkIn);
    const checkOutDate = new Date(booking.checkOut);

    if (!isNaN(checkInDate) && !isNaN(checkOutDate)) {
      checkin = format(checkInDate, 'yyyy-MM-dd');
      checkout = format(checkOutDate, 'yyyy-MM-dd');
    }
  }
  if (!booking) return <h1>Booking not found Try Again Later</h1>


  return (
    <div className="bg-black min-h-screen py-10 px-6 flex justify-center">
      <div className="w-full gap-3 max-w-5xl flex flex-col md:flex-row md:gap-5 justify-between items-center">
        {/* Left Section */}
        <div className="md:col-span-2  p-8 rounded-lg">
          <h1 className="text-2xl font-semibold mb-6">Confirm and Pay</h1>

          {/* Trip Details */}
          <div className="border-b pb-4 mb-6">
            <h2 className="text-lg font-medium">Your trip</h2>
            <div className="mt-4 space-y-2">
              <div className="flex justify-between">
                <p>Check In Date</p>
                <p>{checkin}</p>
              </div>
              <div className="flex justify-between">
                <p>Check Out Date</p>
                <p>{checkout}</p>
              </div>
              <div className="flex justify-between">
                <p>Guests</p>
                <p>{booking?.noOfGuest}</p>

              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div className="border-b pb-4 mb-6">
            <h2 className="text-lg font-medium">Pay with</h2>
            <div className="mt-4 space-y-4">
              <Select placeholder="Net Banking" className="w-full">
                <Select.Option value="hdfc">HDFC Bank</Select.Option>
                <Select.Option value="sbi">State Bank of India</Select.Option>
                <Select.Option value="icici">ICICI Bank</Select.Option>
              </Select>
            </div>
          </div>

          {/* Required Information */}
          <div className="mb-6">
            <h2 className="text-lg font-medium">Required for your trip</h2>
            <div className="mt-4 space-y-4">
              <label>
                Your Full Name
                <Input placeholder="Full Name" className="w-full" defaultValue={booking?.name} disabled />
              </label>
              <label>Your Phone Number
                <Input placeholder="Phone Number" className="w-full" defaultValue={booking?.phone} disabled />
              </label>
              <div className="flex justify-center items-center">
                <Input placeholder="Alternative Phone number" className="w-full" type="number" minLength={10} maxLength={12} />
                <Button type="primary" color="danger">Add</Button>
              </div>
            </div>
          </div>

          {/* Cancellation Policy */}
          <div>
            <h2 className="text-lg font-medium">Cancellation policy</h2>
            <p className="mt-4 text-sm text-gray-600">
              Free cancellation before 19 Dec. After that, the reservation is non-refundable.
            </p>
          </div>

          {/*Confirm Button  */}
          <button className="mx-auto my-4 flex rounded-full bg-primary py-3 px-15 text-xl font-semibold text-white"
            onClick={() => alert("Payment Successful")}
          >
            Confirm and Pay
          </button>
        </div>

        {/* Right Section */}
        <div className=" ">
          <div className="p-6 rounded-lg ">
            <div className="mb-6">
              <img
                src="https://via.placeholder.com/150"
                alt="Listing Thumbnail"
                className=" h-20 w-40 object-cover rounded-md"
              />
              <h2 className="text-lg font-medium mt-4">Corbett Riverside Homestay</h2>
              <p className="text-gray-600">Entire cottage • 4.96 (131 reviews) • Superhost</p>
            </div>

            {/* Price Details */}
            <div className="border-t pt-4">
              <h2 className="text-lg font-medium mb-4">Price details</h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <p>₹5500 x 1 night</p>
                  <p>₹5500</p>
                </div>
                <div className="flex justify-between">
                  <p>Airbnb service fee</p>
                  <p>₹776.47</p>
                </div>
                <div className="flex justify-between">
                  <p>Taxes</p>
                  <p>₹660</p>
                </div>
              </div>
              <div className="border-t mt-4 pt-4 flex justify-between font-semibold">
                <p>Total (INR)</p>
                <p>₹6936.47</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmAndPay;
