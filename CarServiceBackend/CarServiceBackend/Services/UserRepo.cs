using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CarServiceBackend.Models;

namespace CarServiceBackend.Services
{
    public class UserRepo
    {
        private CarServiceBackendContext _userContext = new CarServiceBackendContext();

        public void createUser(User u)
        {
            _userContext.Users.Add(u);
            _userContext.SaveChanges();
        }
        public User getUser(int id)
        {
            User u = _userContext.Users.Where(p => p.UserId == id).FirstOrDefault();
            return u;
        }

        public User getUserByUsername(string _username)
        {
            User u = _userContext.Users.Where(p => p.Username == _username).FirstOrDefault();
            return u;
        }

        public void deleteUser(int id)
        {
            User u = _userContext.Users.Where(p => p.UserId == id).FirstOrDefault();
            _userContext.Users.Remove(u);
            _userContext.SaveChanges();

        }
    }
}
