"use client";
// components/Booking.tsx

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { addDays } from 'date-fns';
import { Dialog } from '@headlessui/react';

const BookingCalendar: React.FC = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleStartDateChange = (date: Date) => {
    setStartDate(date);
    if (date && endDate && date >= endDate) {
      setEndDate(addDays(date, 1));
    }
  };

  const handleEndDateChange = (date: Date) => {
    setEndDate(date);
  };

  const handleBooking = () => {
    if (startDate && endDate) {
      setIsFormOpen(true);
    } else {
      alert('Please select both start and end dates.');
    }
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Book Your Stay</h2>
      <div className="flex flex-col md:flex-row justify-center gap-6 items-center">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Check-in Date</span>
          </label>
          <DatePicker
            selected={startDate}
            onChange={handleStartDateChange}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            minDate={new Date()}
            placeholderText="Select a check-in date"
            className="input input-bordered w-full border-2 border-yellow-500"
            popperClassName="shadow-lg border-yellow-500"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Check-out Date</span>
          </label>
          <DatePicker
            selected={endDate}
            onChange={handleEndDateChange}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate || new Date()}
            placeholderText="Select a check-out date"
            className="input input-bordered w-full border-2 border-yellow-500"
            popperClassName="shadow-lg border-yellow-500"
          />
        </div>
      </div>
      <div className="text-center mt-8">
        <button className="btn btn-primary" onClick={handleBooking}>
          Book Now
        </button>
      </div>

      {/* Modal Form */}
      <Dialog open={isFormOpen} onClose={closeForm} className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen px-4 text-center">
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-50" />

          <div className="relative bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                    Complete Your Booking
                  </Dialog.Title>
                  <div className="mt-2">
                    <form className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Full Name</label>
                        <input type="text" className="input input-bordered w-full" placeholder="Enter your full name" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Email Address</label>
                        <input type="email" className="input input-bordered w-full" placeholder="Enter your email" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                        <input type="tel" className="input input-bordered w-full" placeholder="Enter your phone number" />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button
                type="button"
                className="btn btn-primary sm:ml-3"
                onClick={() => {
                  // Implement the submission logic here
                  alert('Booking confirmed!');
                  closeForm();
                }}
              >
                Confirm Booking
              </button>
              <button
                type="button"
                className="btn btn-secondary mt-3 sm:mt-0"
                onClick={closeForm}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default BookingCalendar;
