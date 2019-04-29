import G  from 'zrender/container/G';
import Circle from 'zrender/graphic/shape/Circle';
import Rect   from 'zrender/graphic/shape/Rect';
import Line   from 'zrender/graphic/shape/Line';

export const Graphic = {
	Group: G,
	G,
	Circle,
	Rect,
	Line
};

for (const k in Graphic) if (Graphic.hasOwnProperty(k)) {
	const type = k[0].toLowerCase() + k.substr(1);
	const Ctor = Graphic[k];
	Graphic[type] = function (cfg) {
		return new Ctor(cfg);
	};
}

export function createNode (nodeName, attr) {
	let node;
	if (nodeName === 'path') {
		// todo
	} else {
		node = Graphic[nodeName]();
	}

	return node;
}

export function diffProps (node, newProps, oldProps) {
	node.attr(newProps);
}
