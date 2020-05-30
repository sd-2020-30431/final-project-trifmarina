using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations.Schema;


namespace CarServiceBackend.Models
{
    public class Booking
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int BookingId { get; set; }
        public DateTime BookingDate { get; set; }
        public string CarModel { get; set; }
        public string CarProblem { get; set; }
        public bool Approved { get; set; }
        public bool Working { get; set; }
        public bool Ready { get; set; }
        public int UserId { get; set; }
        public User User { get; set; }


    }
}
