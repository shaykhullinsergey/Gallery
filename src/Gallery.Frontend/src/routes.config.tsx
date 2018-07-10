import * as React from 'react'
import { Route, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom'

import { HomePage } from 'pages/Home'

export class Routes extends React.Component {
	public render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route path='/:name' component={HomePage} />
				</Switch>
			</BrowserRouter>
		)
	}
}