import {Controller, forceCast, Value, ViewProps} from '@tweakpane/core';

import {TextAreaView} from './view';
/**
 * @hidden
 */
export interface Config {
	value: Value<string>;
	viewProps: ViewProps;
	lineCount: number;
}

/**
 * @hidden
 */
export class TextAreaController implements Controller<TextAreaView> {
	public readonly value: Value<string>;
	public readonly view: TextAreaView;
	public readonly viewProps: ViewProps;
	public readonly lineCount: number;

	constructor(doc: Document, config: Config) {
		this.onInputChange_ = this.onInputChange_.bind(this);
		this.value = config.value;
		this.viewProps = config.viewProps;
		this.lineCount = config.lineCount;

		console.log( this.lineCount )

		this.view = new TextAreaView(doc, {
			value: this.value,
			viewProps: this.viewProps,
			lineCount: this.lineCount
		});
		this.view.inputElement.addEventListener('keyup', this.onInputChange_);
	}

	private onInputChange_(e: Event): void {
		const inputElem: HTMLInputElement = forceCast(e.currentTarget);
		const value = inputElem.value;
		this.value.rawValue = value;
		this.view.refresh();
	}
}
