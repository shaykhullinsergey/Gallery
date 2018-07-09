import * as React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import './bulma.config'
import { Routes } from './routes.config'

render(
	<BrowserRouter>
		<Routes />
	</BrowserRouter>,
	document.getElementById('app')
)