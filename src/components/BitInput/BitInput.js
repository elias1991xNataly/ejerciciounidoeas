import { getValue } from "@testing-library/user-event/dist/utils";
import { useState } from "react";
import DisplayPrimeNumbers from "../DisplayNumbers/DisplayNumbers";
const BigInput = ({ onQuery }) => {

	function handleInput(e) {
		onQuery(e.target.value);
	}

	return (
		<div className="BitInput">
			<h2>Big Input</h2>
			<div className="limit">
				<label>
					Limit=
					<input type="number" onInput={handleInput} />
				</label>


			</div>
			<DisplayPrimeNumbers />
		</div>
	)
}

export default BigInput;