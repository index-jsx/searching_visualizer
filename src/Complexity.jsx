
import "./Complexity.css";
export default function Complexity({ algorithm }) {
    let time = "";
    let space = "";
    if (algorithm === "Linear_Search") {
        time = " O(n) ";
        space = " O(1) ";

    }
    else if (algorithm === "Binary_Search") {
        time = "O(log n)";
        space = "O(1)";
    }
    return (
        <>
            <div className="complexity-table-container">
                <h3> { } </h3>
                <div className="complexity-table">
                    <table>
                        <thead>
                            <tr>
                                <th>
                                    Type
                                </th>
                                <th>
                                    Complexity
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    Time Complexity
                                </td>
                                <td>
                                    {time}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Space Complexity
                                </td>
                                <td>
                                    {space}
                                </td>
                            </tr>
                        </tbody>

                    </table>
                </div>
            </div>
        </>
    )
}