using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using fall_in.Data;
using fall_in.Models;
using Microsoft.Data.SqlClient;
using fall_in;

namespace fall_in.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserHobbiesController : ControllerBase
    {
        private readonly hobbiesContext _context;
        public UserHobbiesController(hobbiesContext context)
        {
            _context = context;
        }
        // ... Existing methods ...
        // GET: api/Users/ExecuteStoredProcedure
        [HttpGet("ExecuteStoredProcedure/{UserId}")]
        public async Task<ActionResult<IEnumerable<UserHobbies>>> ExecuteStoredProcedure(int userId)
        {
            try
            {
                var userIdParam = new SqlParameter("@UserId", userId);
                await _context.Database.ExecuteSqlRawAsync("EXEC FallIn_GetAll_UserHobbies @UserId", userIdParam);

                // Retrieve the response content from the database or other source
                var userHobbies = await _context.UserHobbies
                    .Where(uh => uh.UserId == userId)
                    .ToListAsync();

                return Ok(userHobbies);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}


