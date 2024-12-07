const BookingCard = ({ booking }) => {
    return (
      <div className="text-center p-1 rounded">
        {booking.user.username}
      </div>
    );
  };

  export default BookingCard;