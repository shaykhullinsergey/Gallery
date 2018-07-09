import * as React from 'react'
import { Element, ElementProps } from 'controls'

export class Box extends Element<ElementProps> {

	public render() {
		return (
			<div className={'box'}>
				{this.props.children}
			</div>
		)
	}
}