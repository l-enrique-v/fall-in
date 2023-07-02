using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using fall_in.Models;

namespace fall_in.Data
{
    public partial class fall_inContext : DbContext
    {
        public fall_inContext (DbContextOptions<fall_inContext> options)
            : base(options)
        {
        }
        public DbSet<fall_in.Models.User> User { get; set; } = default!;
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            // Connection string configuration
            optionsBuilder.UseSqlServer("data source=104.42.194.102;initial catalog=C127_l.enrique.v_outlook;User ID=C127_l.enrique.v_outlook_User;Password=C127_l.enrique.v_outlook_User87FF0DD6; MultipleActiveResultSets=False; Encrypt=true; TrustServerCertificate=true;");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>(entity =>
            {
                entity.ToTable("Fallin_User");
                entity.HasKey(e => e.Id);
                entity.Property(e => e.FirstName);
                entity.Property(e => e.LastName);
                entity.Property(e => e.UserName);
                entity.Property(e => e.Email);
                entity.Property(e => e.Password);
                entity.Property(e => e.LocationId);
                entity.Property(e => e.BranchId);
                entity.Property(e => e.CoverImageUrl);
                entity.Property(e => e.DateCreated);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}




