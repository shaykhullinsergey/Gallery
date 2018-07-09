import * as React from 'react'
import { RouteComponentProps } from 'react-router'



export class Page<TRouteParameters = {}> 
	extends React.Component<RouteComponentProps<TRouteParameters>> {
	
	public render() {
		console.log(this.props)
		
		return (<div>Hello</div>)
	}
	
}