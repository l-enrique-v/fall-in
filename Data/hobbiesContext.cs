using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using fall_in.Models;

namespace fall_in.Data
{
    public partial class hobbiesContext : DbContext
    {
        public hobbiesContext(DbContextOptions<hobbiesContext> options)
            : base(options)
        {
        }
        public DbSet<fall_in.Models.UserHobbies> UserHobbies { get; set; } = default!;
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            // Connection string configuration
            optionsBuilder.UseSqlServer("data source=104.42.194.102;initial catalog=C127_l.enrique.v_outlook;User ID=C127_l.enrique.v_outlook_User;Password=C127_l.enrique.v_outlook_User87FF0DD6; MultipleActiveResultSets=False; Encrypt=true; TrustServerCertificate=true;");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            
            modelBuilder.Entity<UserHobbies>().HasNoKey();

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}




