import { tokenizeAction } from "./interpreter/lexer";

export const out = (...args: any[]) => {
    process.env.debug && 
        console.log("[STDIO]", ...args);
}

export const stringToNodeType = (str: string) => {
    return tokenizeAction(str);
}