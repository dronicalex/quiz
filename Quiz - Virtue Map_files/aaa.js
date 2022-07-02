console.log('12erfd')
let bttt = document.querySelector('.needdss');
console.log(bttt)
let vall = 0;
console.log(window.localStorage)
bttt.addEventListener('click', function (e) {
	e.preventDefault()
	let ar = document.querySelectorAll('.active-box');
	let mass = []
	for (let index = 0; index < ar.length; index++) {
		const element = ar[index];
		mass.push(Number(element.dataset.max))
	}
	vall = mass.map(i => x += i, x = 0).reverse()[0]
	localStorage.setItem('vall', vall);
	console.log(window.localStorage)
	document.location.href = 'Calculating - Virtue Map.html'
})



