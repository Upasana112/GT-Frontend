import { useState } from "react";
import BookingCard from "./bookings/BookingCard";
import { FaTrashAlt } from "react-icons/fa";

const ScheduleTableContent = ({
  timeSlots,
  courtNames,
  filteredBookings,
  setSelectedTime,
  setSelectedCourt,
  setIsBookingModalOpen,
}) => {
  const [hoveredBooking, setHoveredBooking] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [password, setPassword] = useState("");

  const openDeleteModal = (booking) => {
    setSelectedBooking(booking);
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setPassword("");
    setSelectedBooking(null);
  };

  const handleDeleteBooking = async () => {
    if (!password) {
      alert("Password is required to delete the booking.");
      return;
    }
  
    try {
      console.log("Sending delete request for:", selectedBooking._id);
  
      const response = await fetch(`${import.meta.env.VITE_URL}/api/bookings/${selectedBooking._id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
  
      console.log("Response status:", response.status);
  
      if (response.ok) {
        alert("Booking successfully deleted.");
        closeDeleteModal();
        window.location.reload(); 
      } else {
        let errorData;
        try {
          errorData = await response.json();
        } catch {
          errorData = { message: "Unexpected error" };
        }
        console.error("Error response data:", errorData);
        alert(`Failed to delete booking: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Error occurred:", error);
      alert("An error occurred while deleting the booking.");
    }
  };
  
  

  return (
    <>
      {isDeleteModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 shadow-lg w-96">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Confirm Deletion
            </h2>
            <p className="text-sm text-gray-600 mb-6">
              Are you sure you want to delete this booking? Enter your password
              to confirm.
            </p>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex justify-end space-x-4">
              <button
                onClick={closeDeleteModal}
                className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteBooking}
                className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="overflow-x-auto overflow-y-auto max-h-[600px] border rounded-lg shadow-lg">
        <table className="w-full table-auto border-collapse bg-white text-sm text-gray-700">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="sticky top-0 left-0 bg-gray-100 p-4 border font-semibold text-left w-1/6">
                Time
              </th>
              {courtNames.map((court) => (
                <th
                  key={court}
                  className="sticky top-0 bg-gray-100 p-4 border font-semibold text-center min-w-[120px]"
                >
                  {court}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {timeSlots.map((time) => (
              <tr key={time} className="hover:bg-gray-50">
                <td className="sticky left-0 bg-white p-4 border font-medium text-gray-800">
                  {time}
                </td>
                {courtNames.map((court, index) => {
                  const bookings = filteredBookings.filter(
                    (booking) =>
                      booking.time === time && booking.court === index + 1
                  );

                  const isBooked = bookings.length > 0;

                  return (
                    <td
                      key={court}
                      className={`relative p-4 border h-16 min-w-[120px] text-center align-middle ${
                        isBooked
                          ? "bg-red-200 cursor-not-allowed"
                          : "hover:bg-gray-100 cursor-pointer"
                      }`}
                      onClick={() => {
                        if (!isBooked) {
                          setSelectedTime(time);
                          setSelectedCourt(index + 1);
                          setIsBookingModalOpen(true);
                        }
                      }}
                    >
                      {isBooked ? (
                        bookings.map((booking) => (
                          <div
                            key={`${time}-${court}`}
                            className="relative flex justify-center items-center"
                            onMouseEnter={() => setHoveredBooking(booking._id)}
                            onMouseLeave={() => setHoveredBooking(null)}
                          >
                            <BookingCard booking={booking} />
                            {hoveredBooking === booking._id && (
                              <FaTrashAlt
                                className="absolute top-1 right-1 text-red-600 cursor-pointer hover:text-red-800"
                                onClick={(e) => {
                                  e.stopPropagation(); 
                                  openDeleteModal(booking);
                                }}
                              />
                            )}
                          </div>
                        ))
                      ) : (
                        <div className="text-sm font-medium text-green-600 hover:underline">
                          Available
                        </div>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ScheduleTableContent;
