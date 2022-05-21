import { Input } from "../Layout/Input";
import "../../styles/functions.scss";
import { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import { FunctionInfo } from "./FunctionInfo";

export const Functions = () => {
    const [functions, setFunctions] = useState<any>({});
    const [editing, setEditing] = useState<string|null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    
    const addFunction = (x: any, dropOldName?: string) => {
        if(x && x.name && x.action) {
            setLoading(true);
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
    }

    const deleteFunction = (name: string) => {
        let replaceFunctions = {...functions}
        delete replaceFunctions[name];
        setFunctions(replaceFunctions)
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
            setLoading(false);

        setEditing(null)
    }, [functions])

    return loading ? <>...</> : (
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
                            return <Function addFunction={addFunction} deleteFunction={deleteFunction} name={key} data={functions[key]} editing={editing === key} setEditing={setEditing} />
                        }
                    )
                }

                {editing === null && <Function addFunction={addFunction} deleteFunction={deleteFunction} isNew />}
            </tbody>
        </table>
    );
}

export const Function = ({addFunction, deleteFunction, editing, setEditing, name, data, isNew = false}: {addFunction?: any; deleteFunction?: any; editing?: boolean; setEditing?: any; name?: any; data?: any; isNew?: boolean;}) => {
    const [fnName, setFnName] = useState<any>(name);
    const [parameters, setParameters] = useState<any>((data && data.parameters) || "");
    const [action, setAction] = useState<any>((data && data.action) || "");

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
                            <td><Input initialValue={name} placeholder="f" onUpdate={setFnName} /></td>
                            <td><Input initialValue={parameters} placeholder="x, y" onUpdate={setParameters} /></td>
                            <td><Input initialValue={action} placeholder="x + y" onUpdate={setAction} /></td>
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
                            <td>{"( "}{data.parameters}{" )"}</td>
                            <td>{data.action}</td>
                            <td><button>Edit</button></td>
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
                            <div>
                                <button onClick={
                                    () => deleteFunction(name)
                                }>Delete</button>
                                <button onClick={
                                    () => setEditing(null)
                                }>Exit</button>
                            </div>
                        </td>
                    </tr>
                )
            }
        </>
    )
}