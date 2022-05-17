import {parseAction, parseFunction, parseParameters, parseText, runFunction} from "../../src/lib/parser";
import * as testData from "./parser.data.json";

const {
    parseData,
    runFunctionData,
    parseFunctionData
} = testData;

test(
    "parseText",
    () => {
        for(const i in parseData) {
            const {input, output} = parseData[i];
            expect(parseText(input)).toBe(output);
        }
        
    }
)

test(
    "parseFunction",
    () => {
        for(const index in parseFunctionData) {
            const row = parseFunctionData[index];
            const {input: fnInput, output} = row;
            const {action, input } = fnInput

            const parsed = parseFunction(
                parseAction(action),
                input
            )

            expect(parsed).toEqual(output);
        }
    }
)

test(
    "runFunction",
    () => {
        for(const index in runFunctionData) {
            const row = runFunctionData[index];
            // const {input: fnInput, output} = row;
            // const {parameters, action, input } = fnInput

            // runFunction(
            //     parseAction(action),
            //     input
            // )
        }
    }
)