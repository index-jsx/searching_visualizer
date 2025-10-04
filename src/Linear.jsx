import { useState } from "react";
import "./Linear.css";

export default function Linear() {
    const [array, setArray] = useState(Genarate_linear_array());
    const [arraysize, setArraysize] = useState(null)
    const [target, setTarget] = useState(null);
    const [found, setFound] = useState(false);
    const [indexfound, setIndexfound] = useState(-1);
    const [currentIndex, setCurrentIndex] = useState(-1);
    const [statement, setStatement] = useState("Click the Button to Search a target Element...!!");

    function setInput(event) {
        setTarget(Number(event.target.value));
    }
    function Genarate_linear_array(size) {
        const arr = Array.from({ length: size }, () => Math.floor(Math.random() * 99));
        arr.sort((a, b) => a - b);
        return arr;
    }
    function Arraysize(event) {
        setArraysize(Number(event.target.value))
    }
    function linear_search() {
        setCurrentIndex(-1);
        let founded_at = -1;
        let i = 0;

        if (target == null) {
            alert("❌ Enter the target value!");
            setStatement("❌ Your target value is empty!");
            return;
        }

        function step() {
            if (i >= array.length) {
                setFound(false);
                setStatement("❌ Your value is not found..❗❗");
                setIndexfound(-1);
                return;
            }

            setStatement("Just a sec..!!");
            setCurrentIndex(i);

            if (array[i] === target) {
                setIndexfound(i);
                setStatement(`✅ Your value is found at index: ${i} 😊`);
                founded_at = i;
                return;
            }

            i++;
            setTimeout(step, 500);
        }

        step();

        if (founded_at !== -1) {
            setFound(true);
            setIndexfound(founded_at);
        } else {
            setFound(false);
            setIndexfound(-1);
        }
    }

    return (
        <>
            <div className="linear-cn">
                <div className="Main-ctn">
                    <h1>Linear Search Visualizer</h1>
                    <br />
                </div>

                {!found && <h2>{statement}</h2>}

                <div className="array-container">
                    {array.map((num, index) => (
                        <div
                            key={index}
                            className={`array-box ${index === currentIndex ? "current" : ""
                                } ${index === indexfound ? "found" : ""}`}
                        >
                            {num}
                        </div>
                    ))}
                </div>
                <br />
                <div className="input-linear">
                    <input
                        className="target-input"
                        type="number"
                        onChange={(e) => setInput(e)}
                        placeholder="Enter target value:"
                    />
                    <input className="target-input" placeholder="enter the size of arr:" onChange={(e) => Arraysize(e)} />
                </div>
                <br />
                <div className="linear-btns">
                    <button className="linear-btn" onClick={linear_search}>Start Searching</button>
                    <button className='new-arr' onClick={() => setArray(Genarate_linear_array(arraysize))} > Generating new Array </button>
                </div>
            </div>
        </>
    );
}
