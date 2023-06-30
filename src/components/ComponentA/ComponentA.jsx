import ComponentB from "../ComponentB/ComponentB";
import React,{ useState } from "react";

const ComponentA = () => {
	
	const valueX = 42
	return (

		<div className="output" id="compA">
			<p>ComponentA</p>
			<p id="valueOfComponentA">x=<span className="number1">{valueX}</span></p>
			<ComponentB initial={valueX} />
		</div>
	)

}
export default ComponentA;
