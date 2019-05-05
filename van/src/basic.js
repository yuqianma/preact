import { render, h, Fragment, Component, options } from 'preact';

specs.basic = function () {
	const App = () => (<g
		position={[100, 100]}
		width={200}
		height={300}
		backgroundColor="#0b9"
	>
		<rect shape={{ width: 100, height: 100 }} style={{ fill: '#0bd' }} />
		<rect position={[0, 150]} shape={{ width: 100, height: 100 }} style={{ fill: '#0bd' }} />
	</g>);

	render(<App/>, this.root);
};
