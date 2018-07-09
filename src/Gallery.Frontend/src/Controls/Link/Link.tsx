import * as React from 'react'
import { ClickElementProps, Element, TextElementProps } from 'controls'
import { NavLink } from 'react-router-dom'


export interface LinkProps extends TextElementProps, ClickElementProps {
	to?: string
}

export class Link extends Element<LinkProps> {
	public render() {
		const className = this.classNames()
		
		return(
			<NavLink className={className} to={this.props.to}>
				{this.props.text}
				{this.props.children}
			</NavLink>
		)
	}
}