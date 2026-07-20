let calc = new Calculator()

function addition() {
	let paramA = Number(document.querySelector("#param-a").value)
	let paramB = Number(document.querySelector("#param-b").value)

	let result = calc.add(paramA, paramB)

	console.log(result)
}
