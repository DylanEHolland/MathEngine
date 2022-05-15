import { InputBox } from "./InputBox";
import "../styles/functions.scss";
import { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import { parseAction, parseParameters } from "../lib/parser";

export const Functions = () => {
    const [functions, setFunctions] = useState<any>({});
    const [editing, setEditing] = useState<string|null>(null);
    
    const addFunction = (x: any, dropOldName?: string) => {
        let replaceFunctions = {...functions};
        replaceFunctions[x.name] = {
            'parameters': x.parameters,
            'action': x.action
        };

        if(dropOldName) {
            delete replaceFunctions[dropOldName];
        }

        setFunctions(replaceFunctions);
    }

    useEffect(() => {
        const cookies = new Cookies();
        if(cookies.get("functions")) {
            setFunctions(cookies.get("functions"));
        }
    }, [])

    useEffect(() => {
        const cookies = new Cookies();
        if(Object.keys(functions).length > 0)
            cookies.set("functions", JSON.stringify(functions));

        setEditing(null)
    }, [functions])

    return (
        <table className="functions__table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Parameters</th>
                    <th>Equation</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    functions && Object.keys(functions).length > 0 && Object.keys(functions).map(
                        key => {
                            return <Function addFunction={addFunction} name={key} data={functions[key]} editing={editing === key} setEditing={setEditing} />
                        }
                    )
                }

                {editing === null && <Function addFunction={addFunction} isNew />}
            </tbody>
        </table>
    );
}

export const Function = ({addFunction, editing, setEditing, name, data, isNew = false}: {addFunction?: any; editing?: boolean; setEditing?: any; name?: any; data?: any; isNew?: boolean;}) => {
    const [fnName, setFnName] = useState<any>(name);
    const [parameters, setParameters] = useState<any>((data && data.parameters) || "");
    const [action, setAction] = useState<any>((data && data.action) || "");

    useEffect(() => {
        console.log("Function:", editing)
    })

    if(!isNew && !data) return null;

    return (
        <>
            <tr 
                className={`${!isNew ? 'function__row' : ''}`}
                onClick={() => {
                    if(!isNew) {
                        setEditing(name)
                    }
                }}
            >
                {
                    (editing || isNew) ? (
                        <>
                            <td><InputBox initialValue={name} placeholder="f" onUpdate={setFnName} /></td>
                            <td><InputBox initialValue={parameters} placeholder="x, y" onUpdate={setParameters} /></td>
                            <td><InputBox initialValue={action} placeholder="x + y" onUpdate={setAction} /></td>
                            <td><button onClick={
                                () => {
                                    addFunction({
                                        name: fnName,
                                        parameters: parameters,
                                        action: action
                                    }, (fnName !== name) && name)
                                }
                            }>{isNew ? "Add" : "Update"}</button></td>
                        </>
                    ) : name && (
                        <>
                            <td>{name}</td>
                            <td>{data.parameters}</td>
                            <td>{data.action}</td>
                            <td></td>
                        </>
                    )
                }
            </tr>
            {
                editing && (
                    <tr>
                        <td colSpan={4}>
                            <FunctionInfo 
                                name={fnName}
                                parameters={parameters}
                                action={action}
                            />
                            <button onClick={
                                () => setEditing(null)
                            }>Exit</button>
                        </td>
                    </tr>
                )
            }
        </>
    )
}

export const FunctionInfo = ({name, parameters, action}: {name: string, parameters: string, action: string}) => {
    return (
        <div className="function__info">
            <b>Parameters:</b>
            <div>
                <code>
                    {JSON.stringify(parseParameters(parameters))}
                </code>
            </div>
            <b>Action:</b>
            <div>
                <code>
                    {JSON.stringify(parseAction(action))}
                </code>
            </div>
        </div>
    )
}