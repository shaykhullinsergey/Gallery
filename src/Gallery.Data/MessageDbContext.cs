using Microsoft.EntityFrameworkCore;

namespace Gallery
{
	public class MessageDbContext : DbContext
	{
		public DbSet<Message> Messages { get; set; }

		public MessageDbContext(DbContextOptions<MessageDbContext> options): base(options)
		{
		}
	}
	
	public class IdentityDbContext : DbContext
	{
		public IdentityDbContext(DbContextOptions<IdentityDbContext> options): base(options)
		{
		}
	}
}