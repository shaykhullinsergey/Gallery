import * as React from 'react'
import { Element, ElementProps } from 'controls'

export class PanelTabs extends Element<ElementProps> {
	public render() {
		const className = this.classNames('panel-tabs')

		return (
			<p className={className}>
				{this.props.children}
			</p>
		)
	}
}

