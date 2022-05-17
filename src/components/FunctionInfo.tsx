import { generateTestData } from "../lib/generator";
import { parseAction, parseParameters, runFunction } from "../lib/parser"

export const FunctionInfo = ({name, parameters, action}: {name: string, parameters: string, action: string}) => {
    return (
        <div className="function__info">
            <table>
                <tbody>
                    <tr>
                        <th>Parameters: </th>
                        <td>
                            <code>
                                {JSON.stringify(parseParameters(parameters))}
                            </code>                            
                        </td>
                    </tr>
                    <tr>
                        <th>Action: </th>
                        <td>
                            <code>
                                {JSON.stringify(parseAction(action))}
                            </code>                            
                        </td>
                    </tr>
                </tbody>
            </table>

            <VisualizeFunction 
                name={name}
                parameters={parameters}
                action={parseAction(action)}
            />
        </div>
    )
}

export const VisualizeFunction = ({table = true, name, parameters, action}: {table?: boolean; name: string; parameters: string; action?: any;}) => {
    const parsedParameters = parseParameters(parameters);
    const parameterData = generateTestData(parsedParameters);

    return table ? (
        <div className="function__visualize--table">
            <table>
                <thead>
                    <tr>
                        {
                            parsedParameters.map(
                                key => {
                                    return <th>{key}</th>
                                }
                            )
                        }
                        <th>Output</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        parameterData.map(
                            (data: any, idx: number) => {
                                return <VisualizeFunctionTableRow data={data} action={action} />
                            }
                        )
                    }
                </tbody>
            </table>
        </div>
    ) : (
        <></>
    )
}

const VisualizeFunctionTableRow = ({data, action}: {data: any; action: any;}) => {
    return (
        <tr>
            {Object.keys(data).map(
                (k: any) => {
                    return <td>{data[k]}</td>
                }
            )}
            <td>{runFunction(action, data)}</td>
        </tr>
    )
}