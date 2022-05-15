import { parseAction, parseParameters } from "../lib/parser"

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