import { h, render, createContext } from 'preact';
import { setupScratch, teardown } from '../../../test/_util/helpers';
import { useContext } from '../../src';

/** @jsx h */


describe('useContext', () => {

	/** @type {HTMLDivElement} */
	let scratch;

	beforeEach(() => {
		scratch = setupScratch();
	});

	afterEach(() => {
		teardown(scratch);
	});


	it('gets values from context', () => {
		const values = [];
		const Context = createContext(13);

		function Comp() {
			const value = useContext(Context);
			values.push(value);
			return null;
		}

		render(<Comp />, scratch);
		render(<Context.Provider value={42}><Comp /></Context.Provider>, scratch);
		render(<Context.Provider value={69}><Comp /></Context.Provider>, scratch);

		expect(values).to.deep.equal([13, 42, 69]);
	});

	it('should only update when value has changed', done => {
		const spy = sinon.spy();
		const Ctx = createContext(0);

		function App(props) {
			return (
				<Ctx.Provider value={props.value}>
					<Comp />
				</Ctx.Provider>
			);
		}

		function Comp() {
			const value = useContext(Ctx);
			spy(value);
			return <h1>{value}</h1>;
		}

		render(<App value={0} />, scratch);
		expect(spy).to.be.calledOnce;
		expect(spy).to.be.calledWith(0);
		render(<App value={1} />, scratch);

		expect(spy).to.be.calledTwice;
		expect(spy).to.be.calledWith(1);

		// Wait for enqueued hook update
		setTimeout(() => {
			// Should not be called a third time
			expect(spy).to.be.calledTwice;
			done();
		}, 0);
	});

	it('should use default value', () => {
		const Foo = createContext(42);
		const spy = sinon.spy();

		function App() {
			spy(useContext(Foo));
			return <div />;
		}

		render(<App />, scratch);
		expect(spy).to.be.calledWith(42);
	});

	it('should allow multiple context hooks at the same time', () => {
		const Foo = createContext(0);
		const Bar = createContext(10);
		const spy = sinon.spy();

		function Comp() {
			const foo = useContext(Foo);
			const bar = useContext(Bar);
			spy(foo, bar);

			return <div />;
		}

		render((
			<Foo.Provider value={0}>
				<Bar.Provider value={10}>
					<Comp />
				</Bar.Provider>
			</Foo.Provider>
		), scratch);

		expect(spy).to.be.calledOnce;
		expect(spy).to.be.calledWith(0, 10);

		render((
			<Foo.Provider value={11}>
				<Bar.Provider value={42}>
					<Comp />
				</Bar.Provider>
			</Foo.Provider>
		), scratch);

		expect(spy).to.be.calledTwice;
		expect(spy).to.be.calledWith(11, 42);
	});
});
