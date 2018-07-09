using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;

namespace Gallery
{
	public class MessageHub : Hub
	{
		private readonly IMessageService service;

		public MessageHub(IMessageService service)
		{
			this.service = service;
		}
		
		public async Task NewMessage(Message message)
		{
			await service.AddAsync(message);
			await Clients.All.SendAsync("addMessage", message);
		}
	}
}