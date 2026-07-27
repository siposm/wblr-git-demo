let calc = new Calculator()

function resetInputs() {
	document.querySelector("#param-a").value = ""
	document.querySelector("#param-b").value = ""
}

function getParamsFromInput() {
	let paramA = Number(document.querySelector("#param-a").value)
	let paramB = Number(document.querySelector("#param-b").value)
	return {
		param_a = paramA,
		param_b = paramB
	}
}

function addition() {
	let params = getParamsFromInput()

	let result = calc.add(params.param_a, params.param_b)

	let target = document.querySelector("#result")
	target.textContent = "Result: " + result

	resetInputs()
}

function subtraction() {
	let params = getParamsFromInput()

	let result = calc.sub(params.param_a, params.param_b)

	let target = document.querySelector("#result")
	target.textContent = "Result: " + result

	resetInputs()
}

function subtraction() {
	let params = getParamsFromInput()

	let result = calc.mul(params.param_a, params.param_b)

	let target = document.querySelector("#result")
	target.textContent = "Result: " + result

	resetInputs()
}


function division() {
	let params = getParamsFromInput()

	params.param_a rparams.param_b = undefined
	try {
		result = calc.div(paramA, paramB)
	} catch (error) {
		result = error
	}

	let target = document.querySelector("#result")
	target.textContent = "Result: " + result

	resetInputs()
}