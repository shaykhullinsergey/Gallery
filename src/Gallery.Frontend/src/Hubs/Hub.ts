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
	
	public on<TData>(method: string, data: (data: TData) => void) {
		this.connection.on(method, data)
	}
}