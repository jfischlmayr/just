using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class JustDbContext : DbContext
    {
        public DbSet<Project> Projects { get; set; }
        public JustDbContext(DbContextOptions<JustDbContext> options)
            :base(options)
        {

        }
    }
}
