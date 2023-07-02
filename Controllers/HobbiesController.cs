using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using fall_in.Data;
using fall_in.Models;

namespace fall_in.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HobbiesController : ControllerBase
    {
        private readonly fall_inContext _context;

        public HobbiesController(fall_inContext context)
        {
            _context = context;
        }

        // GET: api/Hobbies
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Hobby>>> GetHobby()
        {
          if (_context.Hobby == null)
          {
              return NotFound();
          }
            return await _context.Hobby.ToListAsync();
        }

        // GET: api/Hobbies/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Hobby>> GetHobby(int id)
        {
          if (_context.Hobby == null)
          {
              return NotFound();
          }
            var hobby = await _context.Hobby.FindAsync(id);

            if (hobby == null)
            {
                return NotFound();
            }

            return hobby;
        }

        // PUT: api/Hobbies/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutHobby(int id, Hobby hobby)
        {
            if (id != hobby.Id)
            {
                return BadRequest();
            }

            _context.Entry(hobby).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!HobbyExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Hobbies
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Hobby>> PostHobby(Hobby hobby)
        {
          if (_context.Hobby == null)
          {
              return Problem("Entity set 'fall_inContext.Hobby'  is null.");
          }
            _context.Hobby.Add(hobby);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetHobby", new { id = hobby.Id }, hobby);
        }

        // DELETE: api/Hobbies/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteHobby(int id)
        {
            if (_context.Hobby == null)
            {
                return NotFound();
            }
            var hobby = await _context.Hobby.FindAsync(id);
            if (hobby == null)
            {
                return NotFound();
            }

            _context.Hobby.Remove(hobby);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool HobbyExists(int id)
        {
            return (_context.Hobby?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
