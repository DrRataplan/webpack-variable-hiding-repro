import someFunction from './someFunction';

export default function myFunction () {
	if (someFunction()) {
		const someFunction = 123;
		return someFunction + 1;
	}

	someFunction();
}
