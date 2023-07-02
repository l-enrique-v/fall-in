using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using fall_in.Models;
using Microsoft.CodeAnalysis;
using NuGet.Protocol.Plugins;

namespace fall_in.Data
{
    public partial class fall_inContext : DbContext
    {
        public fall_inContext(DbContextOptions<fall_inContext> options)
            : base(options)
        {
        }

        public DbSet<fall_in.Models.User> User { get; set; } = default!;
        public DbSet<fall_in.Models.State> State { get; set; }
        public DbSet<fall_in.Models.Hobby> Hobby { get; set; }
        public DbSet<fall_in.Models.Branches> Branches { get; set; }
        public DbSet<fall_in.Models.Location> Location { get; set; }

        public DbSet<Login> Login { get; set; }
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

<<<<<<< HEAD
=======
            modelBuilder.Entity<State>(entity =>
            {
                entity.ToTable("Fallin_States");
                entity.HasKey(e => e.Id);
                entity.Property(e => e.State_Name);
            });

            modelBuilder.Entity<Hobby>(entity =>
            {
                entity.ToTable("Fallin_Hobbies");
                entity.HasKey(e => e.Id);
                entity.Property(e => e.Hobby_Name);
            });

            modelBuilder.Entity<Branches>(entity =>
            {
                entity.ToTable("Fallin_Branches");
                entity.HasKey(e => e.Id);
                entity.Property(e => e.Branch);
            });

             modelBuilder.Entity<Models.Location>(entity =>
            {
                entity.ToTable("Fallin_user_Locations");
                entity.HasKey(e => e.Id);
                entity.Property(e => e.StateId);
                entity.Property(e => e.ZipCode);
                entity.Property(e => e.City);
            });

            modelBuilder.Entity<Login>(entity =>
            {
                entity.ToTable("Fallin_Login");
                entity.HasKey(e => e.Id);
                entity.Property(e => e.UserName);
                entity.Property(e => e.Password);
            });
>>>>>>> main

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
