import { HubAction } from 'hubs'
import { Message } from 'models/Message'

export const AddMessage: HubAction<Message> = {
	method: 'addMessage'
}