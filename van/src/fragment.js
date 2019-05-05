import { render, h, Fragment, Component, options } from 'preact';

specs.fragment= function () {
	const App = () => (<>
		<rect shape={{ width: 100, height: 100 }} style={{ fill: '#0b9' }} />
		<Fragment key='frag'>
			<circle position={[200, 200]} shape={{ r: 10 }} style={{ fill: '#e55' }} />
			<circle position={[200, 250]} shape={{ r: 10 }} style={{ fill: '#e55' }} />
		</Fragment>
	</>);

	render(<App/>, this.root);
};
