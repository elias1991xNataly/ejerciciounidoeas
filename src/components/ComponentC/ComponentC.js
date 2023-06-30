import { useState } from "react";
import React from "react";

const ComponentC = ({ initial, setCount }) => {


	const Addition = () => {
		setCount(prev => prev + 1)

	}


	return (
		<div className="output" id="compC">
			<div>
				<p>ComponentC</p>

				<p>x={initial}</p>
				<button onClick={(Addition) }>x++</button>
			</div>
		</div>
	)

}
export default ComponentC;
