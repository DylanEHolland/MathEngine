import { generateTestData } from "../lib/generator";
import { parseAction, parseParameters } from "../lib/parser"

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
            />
        </div>
    )
}

export const VisualizeFunction = ({table = true, name, parameters}: {table?: boolean; name: string; parameters: string}) => {
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
                                return <VisualizeFunctionTableRow data={data} />
                                // return data.map(
                                //     (d: any) => {
                                //         return <td>{d}</td>
                                //     }
                                // )
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

const VisualizeFunctionTableRow = ({data}: {data: any;}) => {
    return (
        <tr>
            {Object.keys(data).map(
                (k: any) => {
                    return <td>{data[k]}</td>
                }
            )}
        </tr>
    )
}