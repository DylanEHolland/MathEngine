import { InputBox } from "./InputBox";
import "../styles/functions.scss";

export const Functions = () => {
    return (
        <table className="functions__table">
            <tr>
                <th>Name</th>
                <th>Parameters</th>
                <th>Equation</th>
                <th></th>
            </tr>
            <EditableFunction />
        </table>
    );
}

export const EditableFunction = () => {
    return (
        <tr>
            <td><InputBox placeholder="f" /></td>
            <td><InputBox placeholder="x, y" /></td>
            <td><InputBox placeholder="x + y" /></td>
            <td><button>Add</button></td>
        </tr>
    )
}