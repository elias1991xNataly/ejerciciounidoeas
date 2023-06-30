import { useState } from "react";



const Exerc2 = () => {
	const [count, setCount] = useState(0);
	const [resulOfOperation, setResultOfOperation] = useState();
	const [operators, setOperators] = useState("+");
	function calculate() {
		if (operators === "+") {
			setResultOfOperation(count + count);
		} else if (operators === "-") {
			setResultOfOperation(count - count)
		} else if (operators === "x") {
			setResultOfOperation(count * count)
		} else if (operators === "/") {
			setResultOfOperation(count / count)
		}



	}

	return (
		<div>
			<div class="output2">

				<button className="btn" onClick={() => setCount((count) => count + 1)}>{count}</button>
				<select onClick={calculate} onChange={event => setOperators(event.target.value)} id="operators">
					<option value="+">+</option>
					<option value="-">-</option>
					<option value="x">x</option>
					<option value="/">/</option>
				</select>
				<button className="btn" onClick={() => setCount((count) => count + 1)}>{count}</button>
				<p>=</p>
				<p> {resulOfOperation || "0"}</p>
			</div>
		</div>
	)
}



export default Exerc2;