# Textarea plugin for Tweakpane
[![Version](http://img.shields.io/npm/v/@pangenerator/tweakpane-textarea-plugin.svg)](https://www.npmjs.org/package/@pangenerator/tweakpane-textarea-plugin)

Simple textarea plugin for [Tweakpane][tweakpane].

## Installation

### Browser

```html
<script src="tweakpane.min.js"></script>
<script src="tweakpane-textarea-plugin.min.js"></script>
<script>
  const pane = new Tweakpane.Pane();
  pane.registerPlugin(TweakpaneTextareaPlugin);
</script>
```


### Package

```js
import {Pane} from 'tweakpane';
import * as TextareaPlugin from '@pangenerator/tweakpane-textarea-plugin';

const pane = new Pane();
pane.registerPlugin(TextareaPlugin);
```

## Usage

```js
const params = {
  prop: 'Put your message here!'
};

pane.addInput(params, 'prop', {
  view: 'textarea',
}).on('change', (ev) => {
  console.log(ev.value);
});
```

[tweakpane]: https://github.com/cocopon/tweakpane/
