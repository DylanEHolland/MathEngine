import * as testData from './lexer.data.json';
import {tokenizeParameters} from "../../../src/lib/interpreter/lexer"

const {
    tokenizeParametersData,
    tokenizeActionData
} = testData;

test('tokenizeParameters', () => {
    for(const index in tokenizeParametersData) {
        const row = tokenizeParametersData[index];
        const {input, output} = row;

        expect(tokenizeParameters(input)).toEqual(output);
    }
})

test('tokenizeAction', () => {
    for(const index in tokenizeActionData) {
        const row = tokenizeActionData[index];
        const {input, output} = row;
    }
})