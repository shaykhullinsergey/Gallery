import { Hub } from 'hubs'
import { Message } from 'models/Message'

class MessageHubClass extends Hub {
	public constructor() {
		super('/message')
	}
	
	public NewMessage(message: Message): Promise<void> {
		return this.connection.send('newMessage', message)
	}
}

export const MessageHub = new MessageHubClass()
