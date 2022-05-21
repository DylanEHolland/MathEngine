export const stringToNodeTypeData = [
    {
        "input": "x",
        "output": [{ type: "VARIABLE", value: "x" }]
    },
    {
        "input": "x + x",
        "output": [
            {
                type: "VARIABLE",
                value: "x"
            },
            {
                type: "OPERATOR",
                value: "+"
            },
            {
                type: "VARIABLE",
                value: "x"
            },
        ]
    }
];