import { useState } from "react";
//import { Functions } from "./Functions";
import '../styles/workspace.scss';
import { Button } from "./Layout/Button";
import { Functions } from "./MathEngine/Functions";

export const WorkSpace = () => {
    const [screen, setScreen] = useState<number>(1);

    return (
        <>
            <WorkSpaceHeader 
                screen={screen} 
                setScreen={setScreen}
            />
        </>
    )
}

export const WorkSpaceHeaderButton = ({children, onClick, selected}: {children: any; onClick: any; selected: boolean}) => {
    return (
        <Button className={`workspace__header--btn${selected ? "-selected" : ""}`}>
            {children}
        </Button>
    )
}

export const WorkSpaceHeader = ({screen, setScreen}: {screen: number, setScreen: any}) => {
    return (
        <div className="workspace__header">
            <WorkSpaceHeaderButton
                onClick={() => {}}
                selected={screen === 0}
            >
                Work
            </WorkSpaceHeaderButton>
            <WorkSpaceHeaderButton
                onClick={() => {}}
                selected={screen === 1}
            >
                Functions
            </WorkSpaceHeaderButton>
            <WorkSpaceHeaderButton
                onClick={() => {}}
                selected={screen === 2}
            >
                Constants
            </WorkSpaceHeaderButton>
        </div>
    )
}

export const WorkSpaceScreen = ({screen}: {screen: number}) => {
    const displayScreen = () => {
        let output = (<></>);
        switch(screen) {
            case 0:

            break;

            case 1:
                output = <Functions />
            break;
        }
    } 

    return (
        <>

        </>
    )
}