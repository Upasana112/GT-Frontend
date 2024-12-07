import React, { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-datepicker/dist/react-datepicker.css";
import { fetchCenters, fetchBookings, handleNewBookingSubmit, handleNewCustomerSubmit } from "../utils/api";
import { getFilteredBookings, getCourtNames } from "../utils/helpers";
import SignupModal from "./signup/SignupModal";
import BookingModal from "./bookings/BookingModal";
import Header from "./Header";
import LocationSportDateSelector from "./LocationSportDateSelector";
import ScheduleTableContent from "./ScheduleTableContent";

const ScheduleTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedCourt, setSelectedCourt] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedSport, setSelectedSport] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [centers, setCenters] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [renderKey, setRenderKey] = useState(0);

  useEffect(() => {
    fetchCenters(setCenters);
    fetchBookings(setBookings);
  }, [renderKey]);

  const selectedCenter = centers.find(center => center.location === selectedLocation);
  const sportData = selectedCenter?.sports.find(sport => sport.name === selectedSport);
  const courts = sportData?.courts || 0;
  const timeSlots = sportData?.timeSlots || [];

  const filteredBookings = getFilteredBookings(bookings, selectedLocation, selectedSport, selectedDate);
  const courtNames = getCourtNames(courts);

  const handleBookingModalClose = () => {
    setIsBookingModalOpen(false);
    setRenderKey((prev) => prev + 1); // Trigger re-render
  };

  return (
    <div className="space-y-6">
      <Header setIsModalOpen={setIsModalOpen} />
      <SignupModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={handleNewCustomerSubmit} />
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={handleBookingModalClose}
        onSubmit={handleNewBookingSubmit}
        time={selectedTime}
        court={selectedCourt}
        locationId={selectedCenter?._id}
        sportId={sportData?._id}
        date={selectedDate}
      />
      <LocationSportDateSelector
        centers={centers}
        selectedLocation={selectedLocation}
        setSelectedLocation={setSelectedLocation}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        selectedSport={selectedSport}
        setSelectedSport={setSelectedSport}
        selectedCenter={selectedCenter}
      />
      <ScheduleTableContent
        timeSlots={timeSlots}
        courtNames={courtNames}
        filteredBookings={filteredBookings}
        setSelectedTime={setSelectedTime}
        setSelectedCourt={setSelectedCourt}
        setIsBookingModalOpen={setIsBookingModalOpen}
      />
      <ToastContainer />
    </div>
  );
};

export default ScheduleTable;
