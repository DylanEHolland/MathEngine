import { out } from "../helpers";

export const runFunction = (action: any, data: any) => {
    let output = 0;

    for(const index in action) {
        let node = action[index];
        switch(node.type) {
            case 'VARIABLE':
                break;
        }
    }

    return output
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
                    out("found variable", node.value, "which is equal to", data[node.value])
                    leaf = data[node.value]
                    break;

                case 'SPECIAL':
                    leaf = node;
            }
        }

        if(leaf !== null) {
            nodes.push(leaf);
        }
    }

    return nodes;
}