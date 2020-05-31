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

        // GET: api/Booking/GetAll
        [HttpGet("GetAll/{id}")]
    
        public IEnumerable<Booking> GetAllBookingsUser(int id)
        {
            return _bookingRepository.GetAllBookingsUser(id);
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

        [HttpPut("Approved/{id}")]
        public ActionResult PutApproved(int id, [FromBody] bool value)
        {
            _bookingRepository.updateApproved(id,value);
            return NoContent();
        }

        [HttpPut("Working/{id}")]
        

        public ActionResult PutWorking(int id, [FromBody] bool value)
        {
            _bookingRepository.updateWorking(id,value);
            return NoContent();
        }

        [HttpPut("Ready/{id}")]
        

        public ActionResult PutReady(int id, [FromBody] bool value)
        {
            _bookingRepository.updateReady(id,value);
            return NoContent();
        }


    }
}