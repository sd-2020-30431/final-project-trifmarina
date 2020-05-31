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

        public IList<Booking> GetAllBookingsUser(int id)
        {
            IList<Booking> all_b = _bookingContext.Bookings.Where(p => p.UserId == id).ToList();
            return all_b;
        }

        public void updateApproved(int id,bool val)
        {
            Booking b = _bookingContext.Bookings.Where(p => p.BookingId == id).FirstOrDefault();
            b.Approved = val;
            _bookingContext.SaveChanges();
        }

        public void updateWorking(int id,bool val)
        {
            Booking b = _bookingContext.Bookings.Where(p => p.BookingId == id).FirstOrDefault();
            b.Approved = false;
            b.Working = val;
            _bookingContext.SaveChanges();
        }

        public void updateReady(int id,bool val)
        {
            Booking b = _bookingContext.Bookings.Where(p => p.BookingId == id).FirstOrDefault();
            b.Approved = false;
            b.Working = false;
            b.Ready = val;
            _bookingContext.SaveChanges();
        }

    }
}
