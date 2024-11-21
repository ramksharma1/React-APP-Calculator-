import { useState } from 'react';




function App() {
	const [calc, setCalc] = useState("");
	const [result, setResult] = useState("");

	const ops = ['/','*','+','-', '.'];

		//Arrow function 
	const updateCalc = value => {
		if (
			ops.includes(value) && calc === ''||
			ops.includes(value) && ops.includes(calc.slice(-1))
		) {
			return;
		}
		setCalc(calc + value);

		if (!ops.includes(value)) {
			setResult(eval(calc + value).toString());
		}
	}

	
	const createDigits = () => {
		
		//Initializes an empty array called digits.
		const digits = [];
		
		//Loops from 1 to 9 (inclusive of 1, exclusive of 10).
		for (let i = 1; i < 10; i++) {
			/*Adds a new element to the digits array during 
			each iteration of the loop. The element being added is a 
			<button> component with a key and the digit as its content.*/
			digits.push(
				<button onClick = {()=> updateCalc(i.toString())} key={i}> {i} </button>
			)
		}
		/*Returns the digits array, which now contains 
		  all the buttons for the numbers 1 through 9.*/
		return digits;
	}

	const calculate = () => {
		setCalc(eval(calc).toString());

	}


	return (
		<div className="App">
			<div className="calculator">
				<div className="display">
					{result ? <span>({result})</span> : ''}
					{calc || "0"}
				</div>
				<div className="operators">
					<button onClick = {()=> updateCalc('/')}>/</button>
					<button onClick = {()=> updateCalc('*')}>*</button>
					<button onClick = {()=> updateCalc('+')}>+</button>
					<button onClick = {()=> updateCalc('-')}>-</button>
					
					<button>DEL</button>
				</div>
				<div className="digits">
					{createDigits()  }
					<button onClick = {()=> updateCalc('0')}>0</button>
					<button onClick = {()=> updateCalc('.')}>.</button>

					<button onClick= {calculate}>=</button>

				</div>
			</div>
		</div>
	);
}

export default App;
