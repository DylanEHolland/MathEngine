const specialChars = [
    '+', '-', '*', '/'
]

const arithFunctions = {
    '+': (...args: any) => {
        let value = 0;
        for(const i in args) {
            value += args[i];
        }

        return value;
    }
}

enum TokenTypes {
    Atom, // Everything that isn't a special character
    Special
}

export const parseText = (value: any) => {
    const tokens = tokenize(value.split(' '))
    const node = reassembleCalculation(tokens);
    return runNode(node).toString();
}

export const tokenize = (tokens: any) => {
    let parseableTokens = [];

    for(const token_index in tokens) {
        const tokenData = tokens[token_index];
        let parseableToken = {
            content: tokenData,
            type: TokenTypes.Atom
        };
        if(specialChars.includes(tokenData)) {
            parseableToken.type = TokenTypes.Special
        }

        parseableTokens.push(parseableToken);
    }

    return parseableTokens
}

export const reassembleCalculation = (tokens: any) => {
    let node = {
        action: null,
        operands: []
    }

    for(const tokenIndex in tokens) {
        const token = tokens[tokenIndex];
        if(token.type !== TokenTypes.Special) {
            // @ts-ignore
            node.operands.push(token.content);
        } else {
            node.action = token.content;
        }
    }

    return node;
}

export const runNode = (node: any) => {
    let result = '';

    if(Object.keys(arithFunctions).includes(node.action)) {
        let cleanOperands = [];
        for(const i in node.operands) {
            cleanOperands.push(parseFloat(node.operands[i]));
        }

        // @ts-ignore
        result = arithFunctions[node.action](...cleanOperands)
    }

    return result
}