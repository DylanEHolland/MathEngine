import { generateTestData } from "../lib/generator";
import {tokenizeAction, tokenizeParameters} from "../lib/interpreter/lexer";
import { runFunction } from "../lib/interpreter/parser";

export const FunctionInfo = ({name, parameters, action}: {name: string, parameters: string, action: string}) => {
    return (
        <div className="function__info">
            <table>
                <tbody>
                    <tr>
                        <th>Parameters: </th>
                        <td>
                            <code>
                                {JSON.stringify(tokenizeParameters(parameters))}
                            </code>                            
                        </td>
                    </tr>
                    <tr>
                        <th>Action: </th>
                        <td>
                            <code>
                                {JSON.stringify(tokenizeAction(action))}
                            </code>                            
                        </td>
                    </tr>
                </tbody>
            </table>

            <VisualizeFunction 
                name={name}
                parameters={parameters}
                action={tokenizeAction(action)}
            />
        </div>
    )
}

export const VisualizeFunction = ({table = true, name, parameters, action}: {table?: boolean; name: string; parameters: string; action?: any;}) => {
    const parsedParameters = tokenizeParameters(parameters);
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