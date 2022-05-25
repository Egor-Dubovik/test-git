let a = 5;
async function check() {
	let c = a + 20;
	return c;
}

console.log(await check());