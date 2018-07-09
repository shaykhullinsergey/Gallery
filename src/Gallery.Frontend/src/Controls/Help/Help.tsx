import * as React from 'react'
import {Element, TextElementProps} from 'controls/Element'

export class Help extends Element<TextElementProps> {
	
	public render() {
		const className = this.classNames('help')
		
		return (
			<p className={className}>
				{this.props.text}
			</p>
		)
	}
}