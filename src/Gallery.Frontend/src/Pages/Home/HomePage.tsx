import * as React from 'react'
import { Link } from 'controls/Link'
import { Container } from 'controls/Container'
import { Text } from 'controls/Text'

export class HomePage extends React.Component {

	public render() {
		return (
			<Container>
				<Text text='Home page'/>
				<Link to='/about' text='Works'/>
			</Container>
		)
	}
}