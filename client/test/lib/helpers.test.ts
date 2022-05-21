import { stringToNodeType } from "../../src/lib/helpers"
import { stringToNodeTypeData } from "../data/lib/helpers.data"

test('stringToNodeType', () => {
    for(const index in stringToNodeTypeData) {
        const row = stringToNodeTypeData[index];
        const {input, output} = row;
        
        expect(stringToNodeType(input)).toEqual(output);
    }
})