export const out = (...args: any[]) => {
    process.env.debug && 
        console.log("[STDIO]", ...args);
}