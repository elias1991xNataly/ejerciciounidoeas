import { useState } from "react";


const Button=(props)=>{
const [count,setCount]=useState(0);
const {buttonContent}=props;

const numberOfClicks=()=>{
	setCount(count=>count+1);

};
return(
<div className="button">
	<button onClick={numberOfClicks}> {count} {buttonContent}X++</button>

</div>

)

}

export default Button;