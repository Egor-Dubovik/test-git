let a = 5;

function mult() {
	let c = a * 20;
	return c;
}

function sum() {
	let c = a + 20;
	return c;
}




(function callAllFuction() {
	console.log(mult());
	console.log(sum());
})();