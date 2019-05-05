import G from 'zrender/container/G';
import { options } from 'preact';

window.specs = {};

const context = require.context('./', false, /(?<!index)\.js$/);
context.keys().forEach(context);

const listDom = document.querySelector('#specs');
const rootDom = document.querySelector('#app');

Object.keys(specs).forEach((key) =>
	listDom.appendChild(document.createElement('li')).innerHTML = `<a href="#${key}">${key}</a>`
);

let prevSpec;

function runSpec () {
	const key = location.hash.substr(1);
	const spec = specs[key];
	if (spec) {
		window._spec = spec;
		spec.before = spec.before || function () {
			this.rootDom = rootDom;
		};
		spec.after = spec.after || function () {
			this.zr.dispose();
			delete this.zr;
			delete this.rootDom;
		};

		if (prevSpec && prevSpec.after) {
			prevSpec.after.call(prevSpec);
		}

		spec.before.call(spec);
		spec.call(spec);

		prevSpec = spec;
	}
}

window.addEventListener('hashchange', runSpec);
runSpec();
