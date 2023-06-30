import { useState } from "react";
import ComponentC from "../ComponentC/ComponentC";


const ComponentB = (props) => {
	const {valueX}=props
	const [count, setCount] = useState(0);
	return (

		<div className="output" id="compB">
                    <p>ComponentB</p>
                    <p>x={valueX}</p>
					<ComponentC count={count}/>
		</div>
	)

}
export default ComponentB;
