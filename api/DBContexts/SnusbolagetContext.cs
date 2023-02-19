using Microsoft.EntityFrameworkCore;
using SnusBolaget.API.Entities;

namespace SnusBolaget.API.DBContexts
{
    public class SnusbolagetContext : DbContext
    {
        public DbSet<Product> Products { get; set; }

        public SnusbolagetContext(DbContextOptions<SnusbolagetContext> options)
           : base(options)
        {

        }

        //protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        //{
        //    optionsBuilder.UseSqlite(@"Data Source=snusbolaget.db;");
        //}
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            base.OnModelCreating(modelBuilder);
        }
    }
}
