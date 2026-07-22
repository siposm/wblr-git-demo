let calc = new Calculator()

function addition() {
	let paramA = Number(document.querySelector("#param-a").value)
	let paramB = Number(document.querySelector("#param-b").value)

	let result = calc.add(paramA, paramB)

	let target = document.querySelector("#result")
	target.textContent = "Result: " + result

	document.querySelector("#param-a").value = ""
	document.querySelector("#param-b").value = ""
}

function subtraction() {
	let paramA = Number(document.querySelector("#param-a").value)
	let paramB = Number(document.querySelector("#param-b").value)

	let result = calc.sub(paramA, paramB)

	let target = document.querySelector("#result")
	target.textContent = "Result: " + result

	document.querySelector("#param-a").value = ""
	document.querySelector("#param-b").value = ""
}

function subtraction() {
	let paramA = Number(document.querySelector("#param-a").value)
	let paramB = Number(document.querySelector("#param-b").value)

	let result = calc.mul(paramA, paramB)

	let target = document.querySelector("#result")
	target.textContent = "Result: " + result

	document.querySelector("#param-a").value = ""
	document.querySelector("#param-b").value = ""
}
