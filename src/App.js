import { useState } from 'react';




function App() {
	const [calc, setCalc] = useState("");
	const [result, setResult] = useState("");

	const ops = ['/','*','+.','-', '.'];

	const updateCalc = value => {
		setCalc(calc + value);
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
				<button key={i}> {i} </button>
			)
		}
		/*Returns the digits array, which now contains 
		  all the buttons for the numbers 1 through 9.*/
		return digits;
	}


	return (
		<div className="App">
			<div className="calculator">
				<div className="display">
					{result ? <span>(0)</span> : ''} 
					{calc || "0"}
				</div>
				<div className="operators">
					<button onClick = {()=> updateCalc('/')}>/</button>
					<button>*</button>
					<button>+</button>
					<button>-</button>
					
					<button>DEL</button>
				</div>
				<div className="digits">
					{createDigits()  }
					<button>0</button>
					<button>.</button>
					<button>=</button>

				</div>
			</div>
		</div>
	);
}

export default App;
