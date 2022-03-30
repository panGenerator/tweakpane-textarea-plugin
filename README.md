# Textarea plugin for Tweakpane
Plugin template of an input binding for [Tweakpane][tweakpane].

## Installation

### Browser
```html
<script src="tweakpane.min.js"></script>
<script src="tweakpane-plugin-textarea.min.js"></script>
<script>
  const pane = new Tweakpane.Pane();
  pane.registerPlugin(TweakpaneTemplatePlugin);
</script>
```


### Package
```js
import {Pane} from 'tweakpane';
import * as TextareaPlugin from 'tweakpane-plugin-template';

const pane = new Pane();
pane.registerPlugin(TextareaPlugin);
```


## Usage
```js
const params = {
  prop: 3,
};

// TODO: Update parameters for your plugin
pane.addInput(params, 'prop', {
  view: 'textarea',
}).on('change', (ev) => {
  console.log(ev.value);
});
```


[tweakpane]: https://github.com/cocopon/tweakpane/
