import * as React from "react"
import {Element, ElementProps} from 'controls'

export enum ImageSize {
	x64 = 'is-64x64',
}

export interface ImageProps extends ElementProps{
	src: string
	imageSize?: ImageSize
}

export class Image extends Element<ImageProps> {
	public render() {
		const className = this.classNames('image', this.props.imageSize)
		
		return (
			<img className={className} src={this.props.src} />
		)
	}
}