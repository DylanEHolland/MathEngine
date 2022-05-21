import {parseFunction, runFunction} from '../../../src/lib/interpreter/parser'
import { tokenizeAction } from '../../../src/lib/interpreter/lexer';
import { out } from '../../../src/lib/helpers';
import { parseFunctionData, runFunctionData } from '../../data/lib/interpreter/parser.data';


test(
    "parseFunction",
    () => {
        out("parseFunction");

        for(const index in parseFunctionData) {
            const row = parseFunctionData[index];
            const {input, output} = row;
            const {action, parameters} = input;
            const result = parseFunction(tokenizeAction(action), parameters);

            out("-> result:", result);
            expect(result).toEqual(output);
        }
    }
)

test(
    "runFunction",
    () => {
        out("runFunction");

        for(const index in runFunctionData) {
            const row = runFunctionData[index];
            const {input: fnInput, output} = row;
            const {action, parameters } = fnInput
            let result = runFunction(tokenizeAction(action), parameters);
            
            out("-> result:", result);
            expect(result).toEqual(output);
        }
    }
)

