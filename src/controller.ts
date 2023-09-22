import {Controller, forceCast, Value, ViewProps} from '@tweakpane/core';

import {TextAreaView} from './view.js';
/**
 * @hidden
 */
export interface Config {
	value: Value<string>;
	viewProps: ViewProps;
	rows: number;
	placeholder: string;
}

/**
 * @hidden
 */
export class TextAreaController implements Controller<TextAreaView> {
	public readonly value: Value<string>;
	public readonly view: TextAreaView;
	public readonly viewProps: ViewProps;
	public readonly rows: number;
	public readonly placeholder: string;

	constructor(doc: Document, config: Config) {
		this.onInputChange_ = this.onInputChange_.bind(this);
		this.value = config.value;
		this.viewProps = config.viewProps;
		this.rows = config.rows;
		this.placeholder = config.placeholder;

		// console.log( this.rows )

		this.view = new TextAreaView(doc, {
			value: this.value,
			viewProps: this.viewProps,
			rows: this.rows,
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
