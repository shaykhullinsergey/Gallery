import * as React from "react"
import { Element,ElementProps } from 'controls'

export interface SearchProps extends ElementProps {
	placeholder?: string
}

export class Search extends Element<SearchProps>{
	public render() {
		const className = this.classNames('input')
		
		return(
			<input className={className} 
				type={'search'}
				placeholder={this.props.placeholder}/>
		)
	}
}