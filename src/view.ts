import {ClassName, Value, View, ViewProps} from '@tweakpane/core';

interface Config {
	value: Value<string>;
	viewProps: ViewProps;
}

// Create a class name generator from the view name
// ClassName('tmp') will generate a CSS class name like `tp-tmpv`
const className = ClassName('txtr');

// Custom view class should implement `View` interface
export class PluginView implements View {
	public readonly element: HTMLElement;
	private value_: Value<string>;
	//private textElem_: HTMLElement;
	public readonly inputElement: HTMLTextAreaElement;

	constructor(doc: Document, config: Config) {
		// Create a root element for the plugin
		this.element = doc.createElement('div');
		this.element.classList.add(className());
		// Bind view props to the element
		config.viewProps.bindClassModifiers(this.element);

		// Receive the bound value from the controller
		this.value_ = config.value;
		// Handle 'change' event of the value
		//this.value_.emitter.on('change', this.onValueChange_.bind(this));

		// Create child elements
		// this.textElem_ = doc.createElement('div');
		// this.textElem_.classList.add(className('text'));
		// this.element.appendChild(this.textElem_);

		const inputElem = doc.createElement('textarea');
		inputElem.rows = 4;
		inputElem.cols = 22;
		inputElem.placeholder = 'Enter text here';
		inputElem.classList.add(className('i'));

		//inputElem.addEventListener( "keyup", this.textChanged )

		//config.viewProps.bindDisabled(inputElem);
		this.element.appendChild(inputElem);
		this.inputElement = inputElem;

		// Apply the initial value
		this.refresh_();

		config.viewProps.handleDispose(() => {
			// Called when the view is disposing
			console.log('TODO: dispose view');
		});
	}

	// private textChanged( ev:KeyboardEvent ) : void {
	// 	//console.log( "key event" )
	// }

	private refresh_(): void {
		const rawValue = this.value_.rawValue;
		this.inputElement.value = rawValue;
	}

	private onValueChange_() {
		this.refresh_();
	}
}
