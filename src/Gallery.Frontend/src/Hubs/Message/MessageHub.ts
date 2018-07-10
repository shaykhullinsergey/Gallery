import { Hub } from 'hubs'
import { Message } from 'models/Message'

class MessageHub extends Hub {
	public constructor() {
		super('/message')
	}
	
	public newMessage(message: Message): Promise<void> {
		return this.connection.send('newMessage', message)
	}
}

export const messageHub = new MessageHub()