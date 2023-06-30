import ComponentB from "../ComponentB/ComponentB";
import { useState } from "react";

const ComponentA = (props) => {
	const [count, setCount] = useState(0);
	const valueX = 42;
	return (

		<div className="output" id="compA">
			<p>ComponentA</p>
			<p id="valueOfComponentA">x={valueX}</p>
			<ComponentB valueX={valueX + count} />
		</div>
	)

}
export default ComponentA;
