let calc = new Calculator()

function resetInputs() {
	document.querySelector("#param-a").value = ""
	document.querySelector("#param-b").value = ""
}

function addition() {
	let paramA = Number(document.querySelector("#param-a").value)
	let paramB = Number(document.querySelector("#param-b").value)

	let result = calc.add(paramA, paramB)

	let target = document.querySelector("#result")
	target.textContent = "Result: " + result

	resetInputs()
}

function subtraction() {
	let paramA = Number(document.querySelector("#param-a").value)
	let paramB = Number(document.querySelector("#param-b").value)

	let result = calc.sub(paramA, paramB)

	let target = document.querySelector("#result")
	target.textContent = "Result: " + result

	resetInputs()
}

function subtraction() {
	let paramA = Number(document.querySelector("#param-a").value)
	let paramB = Number(document.querySelector("#param-b").value)

	let result = calc.mul(paramA, paramB)

	let target = document.querySelector("#result")
	target.textContent = "Result: " + result

	resetInputs()
}


function division() {
	let paramA = Number(document.querySelector("#param-a").value)
	let paramB = Number(document.querySelector("#param-b").value)

	let result = undefined
	try {
		result = calc.div(paramA, paramB)
	} catch (error) {
		result = error
	}

	let target = document.querySelector("#result")
	target.textContent = "Result: " + result

	resetInputs()
}