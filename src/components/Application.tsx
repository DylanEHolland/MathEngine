import { useState } from "react";
import { Functions } from "./Functions";
import { SpreadSheet } from "./SpreadSheet";

export const Application = () => {
    const [screen, setScreen] = useState<number>(0);

    const displayScreen = () => {
        let output = (<>Loading</>);

        switch(screen) {
            case 0:
                output = <SpreadSheet />
                break;

            case 1:
                output = <Functions />
                break;
        }

        return output;
    }

    return (
        <>
            <button className={`app__button${screen == 0 ? "-selected" : ""}`} onClick={() => setScreen(0)}>Sheet</button> | <button className={`app__button${screen == 1 ? "-selected" : ""}`} onClick={() => setScreen(1)}>Functions</button>
            <hr />
            {displayScreen()}
        </>
    );
    // (
    //     <>
    
    //         <hr/>
    //         <SpreadSheet />
    // );
}