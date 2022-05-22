import { tokenizeAction } from "./interpreter/lexer";

export const out = (...args: any[]) => {
    process.env.debug && 
        console.log("[STDIO]", ...args);
}

export const stringToNodeType = (str: string) => {
    return tokenizeAction(str);
}

export const parseIncomingProps = (setState: any, defaultProps: any, props: any) => {
    for(const index in Object.keys(defaultProps)) {
        console.log("test:", index)
    }

    return {};
}