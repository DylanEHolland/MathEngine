import { arithmeticOperators } from "./common";

export const tokenizeParameters = (str: string) => {
    /* 
        Take a string with function parameters (e.g. x, y),
    */

    return str.split(",").map(
        it => {
            return it.trim()
        }
    )
}

export const tokenizeAction = (str: string) => {
    let tokens = str.split('');
    tokens = purgeUnwantedNodes(lexExpr(tokens))

    return tokens
}

export const lexExpr = (tokens: any) => {
    let nodes: any = [];
    let index = 0;
    let potentialStr = '';

    for(; index < tokens.length; index++) {
        const character = tokens[index];

        if(character === "(") {
            let newNode = lexExpr(tokens.slice(index + 1));
            nodes.push(newNode);

            index += newNode.length + 1;
        } else if(character === ")") {
            return nodes;
        } else {
            if(arithmeticOperators.includes(character)) {
                nodes.push({
                    type: "OPERATOR",
                    value: character
                })
            } else {
                if(character !== " ")
                    potentialStr += character;
                
                if(!tokens[index + 1] || (tokens[index + 1] === " " || arithmeticOperators.includes(tokens[index + 1])) ) {
                    nodes.push({
                        type: isNaN(parseFloat(potentialStr)) ? "VARIABLE" : "CONSTANT",
                        value: isNaN(parseFloat(potentialStr)) ? potentialStr : Number(potentialStr)
                    })

                    potentialStr = '';
                }
            }
        }
    }

    return nodes;
}

export const purgeUnwantedNodes = (exp: any) => {
    let nodes: any = [];
    for(let i = 0; i < exp.length; i++) {
        if(exp[i].constructor === Array) {
            nodes.push([purgeUnwantedNodes(exp[i])])
        } else {
            if(exp[i].value !== "") {
                nodes.push(exp[i])
            }
        }
    }

    return nodes
}