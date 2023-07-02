using fall_in.Data;
using fall_in.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace fall_in.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly fall_inContext _context;

        public LoginController(fall_inContext context)
        {
            _context = context;
        }

        // POST: api/login
        [HttpPost]
        public async Task<ActionResult<User>> Login(Login loginModel)
        {
            // Find the user based on the provided username
            var user = await _context.User.FirstOrDefaultAsync(u => u.UserName == loginModel.UserName);

            if (user == null)
            {
                // User not found
                return NotFound();
            }

            if (user.Password == loginModel.Password)
            {
                // Login successful
                return Ok(user);
            }
            else
            {
                // Invalid password
                return BadRequest("Invalid password");
            }
        }
    }
}
