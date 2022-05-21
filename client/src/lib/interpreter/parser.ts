import { out } from "../helpers";
import { arithFunctions, arithmeticOperators } from "./common";

export const runFunction = (action: any, data: any) => {
    // TODO: Break this into a loop, starting at the lowest level in 
    // the action tree, each iteration will attempt to simplify (computing)
    // what it can.  The final iteration will be the result.  This way
    // in algebraic functions we can have unknown variables + allow for
    // running functions against other functions
    //
    // i.e. Turtles all the way down


    const tokenizeAndParsed = parseFunction(action, data);
    return lazyCompute(tokenizeAndParsed)
}

export const lazyCompute = (parsed: any) => {
    /* 
        This is not mathematically valid lol,
        just using it to test for now until I implement
        a `generateOperationsHierarchy` we can a more 
        logical compute from :/
    */
    let currentOperator = null;
    let total = 0;    
    
    for(const index in parsed) {
        let node = parsed[index];

        switch(node.type) {
            case 'VARIABLE':
                // TODO: Handle algebraic variables with no value in parameters
                // BLOCKER: generateOperationsHierarchy
                break;

            case 'CONSTANT':
                if(currentOperator === null) {
                    total = Number(node.value);
                } else {
                    /* compute operator */

                    // @ts-ignore
                    const compute: any = arithFunctions[currentOperator];
                    total = compute(total, node.value);
                    currentOperator = null;
                }
                break;

            case 'OPERATOR':
                currentOperator = node.value;
                break;
        }
    }

    return total;
}

export const parseFunction = (action: any, data: any) => {
    let nodes = [];
    for(const index in action) {
        const node = action[index];
        let leaf: any = null;

        if(node.constructor === Array) {
            leaf = parseFunction(node[0], data);
        } else {     
            switch(node.type) {
                case 'VARIABLE':
                    if(data[node.value])
                        leaf = {
                            type: "CONSTANT",
                            value: data[node.value]
                        }

                    break;

                case 'OPERATOR':
                case 'CONSTANT':
                    leaf = node;
                break;
            }
        }

        if(leaf !== null) {
            nodes.push(leaf);
        }
    }

    return nodes;
}