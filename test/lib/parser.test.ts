import {parseText} from "../../src/lib/parser";
import * as testData from "./parser.data.json";

const {
    parseData
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