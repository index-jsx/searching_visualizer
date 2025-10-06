import { toast } from 'react-toastify';
import './Binary.css'
import { useState } from 'react';

export default function Binary() {

    const [tr, setTr] = useState(null);
    const [defaultst, setDefaultst] = useState("Click the Button to search..❗")
    const [binarysentence, setBinarysentence] = useState("")
    const [founded, setFounded] = useState(false);
    const [currentIndexis, setCurrentIndexis] = useState(-1);
    const [low, setLow] = useState(null);
    const [high, setHigh] = useState(null);
    const [mid, setMid] = useState(null);
    const [blockst, setBlockst] = useState();
    const [block, setBlock] = useState(false);
    const [notfound, setNotfound] = useState(true);
    const [notfoundst, setNotfoundst] = useState("enter the value to found❗");
    const [arr, setArr] = useState(Genarate_array(null));
    const [arrsize, setArrsize] = useState(null);

    function Genarate_array(size) {
        const arr = Array.from({ length: size }, () => Math.floor(Math.random() * 99));
        arr.sort((a, b) => a - b);
        return arr;
    }
    function setrIn(event) {
        setTr(Number(event.target.value));
    }
    function setSize(event) {
        let check_binary_size = event.target.value;
        if (check_binary_size <= 20) {
            setArrsize(Number(event.target.value))
            return;
        }
        else {
            setArrsize(0);
            toast.error("❌ array size must be Lessthan or equal to 20..❗❗");
            return;
        }

    }
    function Binary_Search() {
        setFounded(false);
        setNotfound(false);
        setBlock(false);
        setDefaultst("");
        setBinarysentence("");
        setCurrentIndexis(-1);
        let low_var = 0;
        let high_var = arr.length - 1;
        if (tr == null) {
            setBlock(true);
            setBlockst("your input is empty..!⁉️");
            toast.error("❌ enter the target value in the input box..‼️")
            return;
        }
        else if (arrsize===null){
            toast.error("enter the sizze of array..‼️");
            return;
        }
        const step = () => {
            setBlock(false);
            setDefaultst('just a sec..❗')
            if (low_var > high_var) {
                setNotfound(true);
                setNotfoundst(" ❌ your value is not found..❗❗")
                setDefaultst('');
                return;
            }
            let mid = Math.floor((low_var + high_var) / 2);
            setMid(mid);
            setCurrentIndexis(mid);
            setLow(low_var);
            setHigh(high_var);
            if (arr[mid] == tr) {
                setDefaultst('')
                setFounded(true);
                setBinarysentence(` ✅your value is found at index: ${mid} 😊`);
                setNotfoundst('');
                return;
            }
            else if (arr[mid] < tr) {
                low_var = mid + 1;
            }
            else {
                high_var = mid - 1;
            }
            setTimeout(step, 1800);
        }
        step();
    }
    return (
        <>
            <div className="Binary-cn">
                <h1>
                    Binary Search Visualizer
                </h1>
                <br />
                <h2>{defaultst}</h2>
                {founded && (
                    <h2> {binarysentence} </h2>
                )}
                {block && (
                    <h2> {blockst} </h2>
                )}
                {notfound && (
                    <h2> {notfoundst}  </h2>
                )}
                <div className="array-container" >
                    {arr.map((num, index) => {
                        return (
                            <div
                                key={index}
                                className={`array-element ${index === currentIndexis
                                    ? "mid"
                                    : index < low || index > high
                                        ? "skipped"
                                        : index === low
                                            ? "low"
                                            : index === high
                                                ? "high"
                                                : ""
                                    }`}
                            >
                                {num}
                            </div>

                        );
                    })}
                </div>
                <div className='linear-input'>
                    <input className="binary-input" placeholder="enter the target value" type='number' onChange={(e) => setrIn(e)} /> <br />
                    <br />
                    <input type='number' placeholder='enter array size:' className='linear-size' onChange={(e) => setSize(e)} />
                </div>
                <div className='array-btn'>
                    <button className="binary-btn" onClick={Binary_Search}> Start Searching  </button>
                    <button className='new-arr' onClick={() => setArr(Genarate_array(arrsize))} > Generating new Array </button>
                </div>


                <div className="legend">
                    <p className="legend-item"><span className="legend-color low-color"></span> Low</p>
                    <p className="legend-item"><span className="legend-color mid-color"></span> Mid</p>
                    <p className="legend-item"><span className="legend-color high-color"></span> High</p>
                </div>

            </div>
        </>
    )
}