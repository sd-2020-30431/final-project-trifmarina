using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using CarServiceBackend.Models;
using CarServiceBackend.Services;


namespace CarServiceBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookingController : ControllerBase
    {
        private BookingRepo _bookingRepository = new BookingRepo();

        // GET: api/Booking
        [HttpGet]
        public IEnumerable<Booking> Get()
        {
            return _bookingRepository.GetAllBookings();
        }

        // POST: api/Booking/Add
        [HttpPost]
        [Route("Add")]
        public ActionResult Post([FromBody] Booking b)
        {
            if (b == null)
            {
                return BadRequest("Item is null");
            }
            b.Approved = false;
            b.Working = false;
            b.Ready = false;
            _bookingRepository.createBooking(b);
            return NoContent();
        }


    }
}