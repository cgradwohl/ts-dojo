function p1() {
	return Promise.resolve(1);
}

function p2() {
	return Promise.resolve(2);
}

function p3() {
	return Promise.resolve(3);
}

async function test() {
	console.log("A"); // 2
	const r1 = await p1(); // await api removes test() from stack, puts resolved value onto queue
	const r2 = await p2(); // " ... "
	const r3 = await p3(); // " ... "
	console.log(r1 + r2 + r3); // 4
	console.log("B"); // 5
}

/**
 * determine the order of print statements to the console
 * what happens during the execution of the program and
 * describe the relationships between the call stack, node apis,
 * the event loop, and the task queue.
 */
console.log("C"); // 1
test(); //
console.log("D"); // 3

// OUTPUT: C A D 6 B
