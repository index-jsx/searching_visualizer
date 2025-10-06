import './Searching.css';
import { useNavigate } from 'react-router-dom';
export default function Searching() {
    const navigate = useNavigate()
    return (
        <>
            <div className="parent">


                <div className="frontpage-container">
                    <div className="intro">
                        <h1>Welcome to Searching Visualizer</h1>
                        <p>This is my first React project, built to visualize how searching algorithms work.</p>
                    </div>

                    <div className="section">
                        <h2>What is Searching?</h2>
                        <p>
                            Searching is the process of locating a specific element in a collection of data.
                            It’s one of the most important operations in computer science — used in databases, search engines, and every efficient software system.
                        </p>
                    </div>

                    <div className="section">
                        <h2 className="linear">Linear Search</h2>
                        <p>
                            Linear Search is the simplest method — it checks each element one by one until it finds the target.
                            It’s easy to understand and works on unsorted data, but it can be slow when the list grows large.
                        </p> <br />
                        <p className="helper-text">
                            Click the button below to visualize how Linear Search works step by step.
                        </p>
                        <button onClick={() => navigate('/linear')} className="search-btn"> Linear Search </button>
                    </div>

                    <div className="section">
                        <h2 className="binary">Binary Search</h2>
                        <p>
                            Binary Search is faster and smarter. It works on sorted data and cuts the search space in half with every step.
                            This makes it extremely efficient — a perfect example of the power of logic and optimization.
                        </p> <br />
                        <p className="helper-text">
                            Click the button below to see Binary Search in action.
                        </p>
                        <button onClick={() => navigate('/binary')} className="search-btn"> Binary Search </button>
                    </div>
                    <br />
                    <div className='sign'>
                        <h5> created By -- Mervin F </h5>
                    </div>
                </div>

            </div>

        </>
    )
}