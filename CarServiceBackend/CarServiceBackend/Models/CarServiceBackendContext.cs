using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;


namespace CarServiceBackend.Models
{
    public class CarServiceBackendContext :DbContext
    {
        public CarServiceBackendContext(): base()
        {

        }

        public DbSet<User> Users { get; set; }
        public DbSet<Booking> Bookings { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder
                .UseSqlServer(@"Data Source=(local);Initial Catalog=CarServiceDB;Trusted_Connection=True;MultipleActiveResultSets=True;");
        }

        //protected override void OnModelCreating(ModelBuilder modelBuilder)
        //{
        //    modelBuilder.Entity<GroceryListItem>().HasKey(sc => new { sc.GroceryListId, sc.ItemId });
        //}

    }
}
