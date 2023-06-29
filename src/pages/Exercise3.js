import { useState } from "react";
import Title3 from "../components/Title3/Title3";
import Enunciate3 from "../components/Enunciate3";
const Exercise3 = () => {
    const [count, setCount] = useState(0);
    return (
        <div className="App">
            <p className="output">
                <Title3 />
                <Enunciate3 />
                <div class="output">
                    <p>ComponentA</p>
                    <p>x={count}</p>
                    <div>
                        <p>ComponentB</p>
                        <p>x={count}</p>
                        <div>
                            <p>ComponentC</p>
                            <p>x={count}</p>
                            <button onClick={() => setCount((count) => count + 1)}>x++</button>
                        </div>
                    </div>
                </div>
            </p>
        </div>
    )
}
export default Exercise3;