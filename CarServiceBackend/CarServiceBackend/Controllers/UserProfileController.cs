using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using CarServiceBackend.Services;

namespace WasteLESS.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserProfileController : ControllerBase
    {

        private UserRepo _userRepository = new UserRepo();
        public UserProfileController()
        {

        }

        [HttpGet]
        [Authorize]
        public Object GetUserProfile()
        {
            string userId = User.Claims.First(c => c.Type == "UserID").Value;
            var user = _userRepository.getUser(Int32.Parse(userId));
            return new
            {
                user.UserId,
                user.Username,
                user.Email,
                user.Password
            };
        }

    }
}