import { render }  from './render';
import { init }    from 'zrender/zrender';
import { Graphic } from './zr-graphic';

export function renderCanvas(vnode, parentDom, options = {}) {
	// TODO: how to pass `zr.flush` to `enqueueRender`
	// options.disableAutoFlush = true;
	const zr = init(parentDom, options);
	const root = new Graphic.G();
	zr.add(root);
	render(vnode, root);
	return zr;
}
