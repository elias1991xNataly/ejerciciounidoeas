import { useState } from "react";
import Title3 from "../components/Title3/Title3";
import Enunciate3 from "../components/Enunciate3";
import Exerc3 from "../components/Exerc3/Exerc3";


const Exercise3 = () => {
    const [count, setCount] = useState(0);
    return (
        <div className="App">
            <p className="output">
                <Title3 />
                <Enunciate3 />
                <Exerc3/>
            </p>
        </div>
    )
}
export default Exercise3;