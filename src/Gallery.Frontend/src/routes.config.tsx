import * as React from 'react'
import { Route, Switch } from 'react-router'

import { HomePage } from 'pages/Home'
import { AboutPage } from 'pages/About'
import { TestPage } from 'pages/Test'

export class Routes extends React.Component {
	
	public render() {
		return (
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route exact path='/about' component={AboutPage} />
				<Route exact path='/test/:id' component={TestPage} />
			</Switch>
		)
	}
}