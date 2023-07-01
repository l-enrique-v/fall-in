using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using fall_in.Model;

namespace fall_in.Data
{
    public partial class Fall_inContext : DbContext
    {
        public Fall_inContext(DbContextOptions<Fall_inContext> options)
            : base(options)
        {
         
        }
        public DbSet<User> User { get; set; } = default!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            // Connection string configuration
            var connectionString = "data source=104.42.194.102;initial catalog=C127_l.enrique.v_outlook;User ID=C127_l.enrique.v_outlook_User; Password=C127_l.enrique.v_outlook_User87FF0DD6; MultipleActiveResultSets=False; Encrypt=true; TrustServerCertificate=true;";
            optionsBuilder.UseSqlServer(connectionString);

            // Log the credentials
            //var parsedConnectionString = new Microsoft.Data.SqlClient.SqlConnectionStringBuilder(connectionString);
            //var username = parsedConnectionString.UserID;
            //var password = parsedConnectionString.Password;
            //Console.WriteLine($"Username: {username}, Password: {password}");
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
