import * as signalR from '@aspnet/signalr'

export class Hub {
	
	protected connection: signalR.HubConnection
	
	protected constructor(url: string) {
		this.connection = new signalR.HubConnectionBuilder()
			.withUrl(url)
			.build()
		
		this.connection.start()
			.catch(error => console.error(error))
	}
	
	public on<TPayload>(action: HubAction<TPayload>, callback: (data: TPayload) => void) {
		this.connection.on(action.method, callback)
	}
	
	public remove<TPayload>(action: HubAction<TPayload>) {
		this.connection.off(action.method)
	}
}

export interface HubAction<TPayload> {
	method: string
	payload?: TPayload
}