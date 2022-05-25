let a = 5;
async function check() {
	let c = a + 10;
	return c;
}

console.log(await check());