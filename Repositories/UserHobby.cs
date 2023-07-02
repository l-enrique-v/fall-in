using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using fall_in.Data;
using fall_in.Models;
namespace fall_in.Models
{

  public class UserHobbiesRepository
{
    private readonly DbContextOptions<hobbiesContext> _options;

    public UserHobbiesRepository(DbContextOptions<hobbiesContext> options)
    {
        _options = options;
    }

    public IEnumerable<UserHobbies> GetAllUserHobbies()
    {
        using (var context = new hobbiesContext(_options))
        {
            return context.UserHobbies.FromSqlRaw("EXEC FallIn_GetAll_UserHobbies").ToList();
        }
    }
}
}