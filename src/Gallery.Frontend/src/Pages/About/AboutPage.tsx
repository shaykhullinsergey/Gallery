import * as React from 'react'
import { Link } from 'controls/Link'
import { Textbox } from 'controls/Textbox'


export class AboutPage extends React.Component<{}, {id: string}> {

	public render() {
		
		return (
			<div>
				<p>About page</p>
				<Textbox onChange={value => this.setState({id: value})}/>
				<Link to={`/test/${this.state ? this.state.id : null}`} text='Test'/>
			</div>
		)
	}
}