import { useState } from "react";

const ComponentC = (props) => {
	const [count, setCount] = useState(0);
	const CompA=document.getElementById("valueOfComponentA");

	return (
		<div className="output" id="compC">
			<div>
				<p>ComponentC</p>
				<p>{console.log(CompA)}</p>
				<p>x={count}</p>
				<button onClick={() => setCount((count) => count + 1)}>x++</button>
							</div>
		</div>
	)

}
export default ComponentC;
