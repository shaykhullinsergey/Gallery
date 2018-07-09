using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace Gallery
{
	public class MessageService : IMessageService
	{
		private readonly MessageDbContext context;

		public MessageService(MessageDbContext context)
		{
			this.context = context;
		}
		
		public async Task AddAsync(Message message)
		{
			await context.Messages.AddAsync(message);
			await context.SaveChangesAsync();
		}

		public async Task<List<Message>> GetAllAsync()
		{
			return await context.Messages.ToListAsync();
		}
	}
}