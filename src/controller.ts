import { Controller, forceCast, Value, ViewProps } from '@tweakpane/core';

import { TextAreaView } from './view';
/**
 * @hidden
 */
export interface Config {
	value: Value<string>;
	viewProps: ViewProps;
	lineCount: number;
	placeholder: string;
}

/**
 * @hidden
 */
export class TextAreaController implements Controller<TextAreaView> {
	public readonly value: Value<string>;
	public readonly view: TextAreaView;
	public readonly viewProps: ViewProps;
	public readonly lineCount: number;
	public readonly placeholder: string;

	constructor(doc: Document, config: Config) {
		this.onInputChange_ = this.onInputChange_.bind(this);
		this.value = config.value;
		this.viewProps = config.viewProps;
		this.lineCount = config.lineCount;
		this.placeholder = config.placeholder;

		// console.log( this.lineCount )

		this.view = new TextAreaView(doc, {
			value: this.value,
			viewProps: this.viewProps,
			lineCount: this.lineCount,
			placeholder: this.placeholder,
		});
		this.view.inputElement.addEventListener('keyup', this.onInputChange_);
	}

	private onInputChange_(e: KeyboardEvent): void {
		//console.log( e.key )

		//if( e.key === 'Enter' ){
		const inputElem: HTMLInputElement = forceCast(e.currentTarget);
		const value = inputElem.value;
		this.value.rawValue = value;
		this.view.refresh();
		//}
	}
}
