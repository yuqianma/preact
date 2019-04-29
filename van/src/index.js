import { render, h, Fragment, Component, options } from 'preact';
import { useState } from 'preact/compat';
import * as Zr from 'zrender/zrender';
import G from 'zrender/container/G';

const rootDom = document.querySelector('#app');

const zr = Zr.init(rootDom);
const root = new G({
	// backgroundColor: 'rgba(0, 150, 200, 0.3)',
	// width: zr.getWidth(),
	// height: zr.getHeight()
});
zr.add(root);

const App = () => (<Fragment key="app">
	<g position={[100, 100]}>
		<rect shape={{ width: 100, height: 100 }} style={{ fill: '#0bd' }}></rect>
	</g>
</Fragment>);

render(<App/>, root);
