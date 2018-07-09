import * as React from 'react'
import { Page } from 'pages'
import { MessageHub } from 'hubs/Message'
import { Message } from 'models/Message'
import { RouteComponentProps } from 'react-router'
import { Link } from 'controls/Link'

interface TestPageParameters {
	id: number
}

MessageHub.on<Message>('addMessage',
	(message: Message) => console.log('Response:', message))

export class TestPage extends Page<TestPageParameters> {
	
	public constructor(props: RouteComponentProps<TestPageParameters>) {
		super(props)

		const id = this.props.match.params.id

		const message: Message = {
			id: id,
			text: id.toString()
		}

		MessageHub.NewMessage(message)
			.then(() => console.log('sended'))
	}
	
	public render() {
		return (
			<div>
				<p>{this.props.match.params.id}</p>
				<Link to='/about' text='Back'/>
			</div>)
	}
}