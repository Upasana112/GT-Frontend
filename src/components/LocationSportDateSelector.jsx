import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const LocationSportDateSelector = ({
  centers,
  selectedLocation,
  setSelectedLocation,
  selectedDate,
  setSelectedDate,
  selectedSport,
  setSelectedSport,
  selectedCenter,
}) => {
  const handleLocationClick = (location) => {
    setSelectedLocation(location);
  };

  const handleSportClick = (sport) => {
    setSelectedSport(sport);
  };

  return (
    <div className="flex flex-col space-y-6 p-4">
      <div className="flex justify-between gap-4">
        <div className="flex justify-center p-2 rounded-lg flex-1">
          <div className="flex bg-gray-200 rounded-full p-1 w-full">
            {centers.map((center) => (
              <button
                key={center._id}
                onClick={() => handleLocationClick(center.location)}
                className={`flex-1 py-2 px-4 text-center rounded-full ${
                  selectedLocation === center.location
                    ? "bg-white text-blue-500 shadow"
                    : "text-gray-700 hover:bg-gray-300"
                }`}
              >
                {center.location}
              </button>
            ))}
          </div>
        </div>
        {selectedCenter && (
          <div className="flex justify-center p-2 rounded-lg flex-1">
            <div className="flex bg-gray-200 rounded-full p-1 w-full">
              {selectedCenter?.sports.map((sport) => (
                <button
                  key={sport._id}
                  onClick={() => handleSportClick(sport.name)}
                  className={`flex-1 py-2 px-4 text-center rounded-full ${
                    selectedSport === sport.name
                      ? "bg-white text-blue-500 shadow"
                      : "text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {sport.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-col items-center space-y-2">
        <DatePicker
          selected={selectedDate}
          onChange={setSelectedDate}
          className="border rounded-md p-2 w-full max-w-sm shadow-sm focus:ring focus:ring-blue-300"
          calendarClassName="rounded-md shadow-lg"
          dateFormat="MMMM d, yyyy"
          minDate={new Date()} // Restrict to current date or future dates
        />
      </div>
    </div>
  );
};

export default LocationSportDateSelector;
