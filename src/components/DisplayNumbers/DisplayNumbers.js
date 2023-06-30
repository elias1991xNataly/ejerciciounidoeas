import { queries } from "@testing-library/react";
import { useState } from "react";


const DisplayPrimeNumbers = (props) => {
	const { query } = props;
	const queryNumber = parseInt({ query });
	let [arr, setArr] = useState([""]);
	let [arr2, setArr2] = useState([""]);
	setArr2 = [];

	const GeneratePrimeNumbers = num => {


		if (num == 1 || num == 0) return false;


		for (let i = 2; i <= Math.sqrt(num); i++) {
			if (num % i == 0) return false;
		}
		return true;
		for (let i = 0; i < queryNumber; i++) {
			if (GeneratePrimeNumbers(i)) { arr.push(i) }

		}
		const setOfNumbers = new Set(arr)
		setArr2 = [...setOfNumbers]

	};
	return arr2;






	return (

		<div class="boutput">
			<h1>DisplayPrimeNumbers</h1>
			<p><b>Prime numbers until limit =</b></p>

			{console.log(arr)}
			<div class="box">
				{arr2.map(name => {
					return <p> {name} </p>
				})}

			</div>
		</div>

	)
}

export default DisplayPrimeNumbers;
