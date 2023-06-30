import { useState } from "react";
import ComponentC from "../ComponentC/ComponentC";


const ComponentB = ({initial}) => {
	
	const [count, setCount] = useState(initial);


	return (

		<div className="output" id="compB">
			
			<p>ComponentB</p>
			<p>x={count}</p>
			<ComponentC initial={count} setCount={setCount} />
		</div>
	)

}
export default ComponentB;
