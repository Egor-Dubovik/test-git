let a = 5;
async function mult() {
	let c = a * 20;
	return c;
}

console.log(await mult());