import React from 'react';
import { useState } from 'react';

const Exerc1 = () => {
	const [count, setCount] = useState(0);
return(

	<div >

	<button className="btn" id="btn1" onClick={() => setCount((count) => count + 1)}>{count} likes</button>
	</div>
	)
	}
;



export default Exerc1;
