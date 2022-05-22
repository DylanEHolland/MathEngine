import React from "react";
import Collection from "../DataEngine/Collection";
import { Data } from "../DataEngine/Data";
import Space from "./Space";

export class Research extends Space {
    render = () => {
        return (
            <Data />
        );
    }
}