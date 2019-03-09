/**
 * Created by Jeffrey on 2019/3/9.
 */
import Group  from 'zrender/container/Group';
import Circle from 'zrender/graphic/shape/Circle';
import Rect   from 'zrender/graphic/shape/Rect';
import Line   from 'zrender/graphic/shape/Line';

export const Graphic = {
	Group,
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

export function removeNode(node) {
	// let parentNode = node.parentNode;
	// if (parentNode) parentNode.removeChild(node);

	// todo, zr has several remove methods.
	// Is there any difference between `delFromStorage` and `group.remove`...
	const parent = node.parent || node.__zr;
	if (parent) {
		parent.remove(node);
	}
	if (node.__zr) {
		// remove animation
		node.removeSelfFromZr(node.__zr);
	}
}

// TODO, prevent `indexOf`
export function getNextSibling(node) {
	return node.parent && node.parent._children[node.parent._children.indexOf(node) + 1];
}
