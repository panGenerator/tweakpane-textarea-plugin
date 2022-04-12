import {Controller, forceCast, Value, ViewProps} from '@tweakpane/core';

import {TextAreaView} from './view';
/**
 * @hidden
 */
export interface Config {
	value: Value<string>;
	viewProps: ViewProps;
}

/**
 * @hidden
 */
export class TextAreaController implements Controller<TextAreaView> {
	public readonly value: Value<string>;
	public readonly view: TextAreaView;
	public readonly viewProps: ViewProps;

	constructor(doc: Document, config: Config) {
		this.onInputChange_ = this.onInputChange_.bind(this);
		this.value = config.value;
		this.viewProps = config.viewProps;

		this.view = new TextAreaView(doc, {
			value: this.value,
			viewProps: this.viewProps,
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
