import { stringToNodeType } from "../../../../src/lib/helpers";

export const parseFunctionData = [
    {
        "input": {
            "action": "x + 5",
            "parameters": {
                "x": 5
            }
        },
        "output": [
            stringToNodeType("x"),
            stringToNodeType("+"),
            stringToNodeType("x")
        ]
    }
];

export const runFunctionData = [
    {
        "input": {
            "action": "x + 5",
            "parameters": {
                "x": 5
            }
        },
        "output": 10
    },
    {
        "input": {
            "action": "x - 5",
            "parameters": {
                "x": 5
            }
        },
        "output": 0
    },
    {
        "input": {
            "action": "x * 5",
            "parameters": {
                "x": 5
            }
        },
        "output": 25
    },
    {
        "input": {
            "action": "x / 5",
            "parameters": {
                "x": 25
            }
        },
        "output": 5
    }
];