import { useState } from "react"
import "./Linear.css";
export default function Linear() {
    const [array, setArray] = useState([1, 5, 7, 2, 9, 5, 8, 7, 17, 10, 12, 9]);
    const [target, setTarget] = useState(null);
    const [found, setFound] = useState(false);
    const [indexfound, setIndexfound] = useState(-1);
    const [currentIndex, setCurrentIndex] = useState(-1);
    const [statement, setStatement] = useState("Click the Button to Search an target Element...!!");
    function setInput(event) {
        setTarget(Number(event.target.value));

    }
    function linear_search() {
        setCurrentIndex(-1);
        let founded_at = -1
        let i = 0;
        if (target == null) {
            alert(" ❌  enter the target value.....!!")
            setStatement(" ❌ your target value is empty.!!")
            return;
        }
        function step() {
            if (i >= array.length) {
                setFound(false);
                setStatement("❌ Your Value is not found..❗❗ ");
                setIndexfound(-1);
                return;
            }
            setStatement(" just a sec..!! ");
            if (i < array.length) {
                setCurrentIndex(i)
                if (array[i] == target) {
                    setIndexfound(i);
                    setStatement(` ✅your value is found at index :${i}😊`);
                    founded_at = i;
                    return i;

                }
                i++;
                setTimeout(step, 500);
            }
        }
        if (founded_at != -1) {
            setFound(true);
            setIndexfound(founded_at);
        }
        else {
            setFound(false);
            setIndexfound(-1);
        }
        step()

    }

    return (
        <>
            <div className="linear-cn">
                <div className="Main-ctn">
                    <h1>
                        Linear search Visualizer
                    </h1>
                    <br />
                </div>


                {!found && (
                    <h2>{statement}</h2>
                )}
                <div className="array-container">
                    <div className="array-container">
                        {array.map((num, index) => (
                            <div
                                key={index}
                                className={`array-box ${index === currentIndex ? "current" : ""
                                    } ${index === indexfound ? "found" : ""} `}
                            >
                                {num}
                            </div>
                        ))}
                    </div>

                </div>

                <br />
                <div className="input-linear">
                    <input className="target-input" type="number" onChange={(e) => setInput(e)} placeholder="enter target value:" />
                    <input className=""
               
                <div>
                    <button className="linear-btn" onClick={linear_search}>
                        Start Searching
                    </button>
                    <button className="new-array" >  Generating New Array  </button>
                </div>

            </div>
        </>
    )
}