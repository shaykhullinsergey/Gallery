using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore.Extensions.Internal;

namespace Gallery
{
	public interface IMessageService
	{
		Task AddAsync(Message message);
		Task<List<Message>> GetAllAsync();
	}
}