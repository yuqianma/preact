import { render, h, Fragment, Component, options } from 'preact';
import { useState } from 'preact/compat';

specs.useState = function () {

	const Button = ({ position=[0,0] }) => {
		const [count, setCount] = useState(0);
		return <rect
			position={position}
			shape={{
				width: 100,
				height: 50,
			}}
			style={{
				fill: count % 2 ? '#0bd' : '#0b9',
				text: count,
			}}
			onclick={
				(e) => {
					setCount(count + 1);
				}
			}
		/>
	};

	const App = () => (<g>
		<Button key='1'/>
		<Button key='2' position={[0, 100]}/>
	</g>);

	this.zr = render(<App/>, this.rootDom);
};

