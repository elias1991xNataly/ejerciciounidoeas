import { useState } from "react";
import Title1 from "../components/Title1";
import Enunciate1 from "../components/Enunciate1";



const Exercise1 = () => {
    const [count, setCount] = useState(0);
    // const {path}=props;
    // console.log(path);
    return (
        <div className="App">
            <div className="output">

                <Title1 />
                <Enunciate1 />

                <button className="btn" id="btn1" onClick={() => setCount((count) => count + 1)}>{count} likes</button>
            </div>
        </div>

    )
}
export default Exercise1;