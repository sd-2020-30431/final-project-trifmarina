using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CarServiceBackend.Models;


namespace CarServiceBackend.Services
{
    public class BookingRepo
    {
        private CarServiceBackendContext _bookingContext = new CarServiceBackendContext();

        public void createBooking(Booking b)
        {
            _bookingContext.Bookings.Add(b);
            _bookingContext.SaveChanges();
        }

        public Booking GetBooking(int id)
        {
            Booking b = _bookingContext.Bookings.Where(p => p.BookingId == id).FirstOrDefault();
            return b;
        }

        public IList<Booking> GetAllBookings()
        {
            IList<Booking> all_b = _bookingContext.Bookings.ToList();
            return all_b;
        }


    }
}
