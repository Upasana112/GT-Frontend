export const getFilteredBookings = (bookings, selectedLocation, selectedSport, selectedDate) => {
    return bookings.filter(
      (booking) =>
        booking.location.location === selectedLocation &&
        booking.sport.name === selectedSport &&
        booking.date.split("T")[0] === selectedDate.toISOString().split("T")[0]
    );
  };
  
  export const getCourtNames = (courts) => {
    return Array.from({ length: courts }, (_, index) => `Court ${index + 1}`);
  };
  