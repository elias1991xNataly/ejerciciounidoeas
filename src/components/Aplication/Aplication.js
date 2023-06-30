import BigInput from "../BitInput/BitInput";
import DisplayPrimeNumbers from "../DisplayNumbers/DisplayNumbers";
import { useState } from "react";

const Aplication = (props) => {

	const [query, setQuery] = useState();

	return (
		<div className="output">
			<h2>Aplication</h2>
			<BigInput onQuery={setQuery} />
			<DisplayPrimeNumbers query={query} />
		</div>
	)

}
export default Aplication;