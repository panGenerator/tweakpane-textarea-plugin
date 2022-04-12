import {ClassName, Value, View, ViewProps} from '@tweakpane/core';

interface Config {
	value: Value<string>;
	viewProps: ViewProps;
}

const className = ClassName('txtr');

export class TextAreaView implements View {
	public readonly inputElement: HTMLTextAreaElement;
	public readonly element: HTMLElement;
	private readonly value_: Value<string>;

	constructor(doc: Document, config: Config) {
		this.onChange_ = this.onChange_.bind(this);

		this.element = doc.createElement('div');
		this.element.classList.add(className());
		config.viewProps.bindClassModifiers(this.element);

		//this.onChange_ = this.onChange_.bind(this);

		const inputElem = doc.createElement('textarea');
		inputElem.rows = 4;
		inputElem.cols = 22;
		inputElem.placeholder = 'Enter text here';
		inputElem.classList.add(className('i'));

		config.viewProps.bindDisabled(inputElem);
		this.element.appendChild(inputElem);
		this.inputElement = inputElem;

		config.value.emitter.on('change', this.onChange_);
		this.value_ = config.value;

		this.refresh();
	}

	public refresh(): void {
		this.inputElement.value = this.value_.rawValue;
	}

	private onChange_(): void {
		this.refresh();
	}
}
