import * as React from 'react'
import { render } from 'react-dom'

import './bulma.config'
import { Routes } from './routes.config'

render(
	<Routes/>,
	document.getElementById('app')
)	