import { useState } from "react";
import { Button } from "./Layout/Button";
import '../styles/workspace.scss';
import '../styles/layout.scss';
import Research from './Spaces/Research';
import Knowledge from "./Spaces/Knowledge";

export const WorkSpace = () => {
    const [screen, setScreen] = useState<number>(0);

    return (
        <>
            <WorkSpaceHeader 
                screen={screen} 
                setScreen={setScreen}
            />
            <div className="main__content">
                <WorkSpaceScreen 
                    screen={screen}
                />
            </div>
        </>
    )
}

export const WorkSpaceHeaderButton = ({children, onClick, selected}: {children: any; onClick: any; selected: boolean}) => {
    return (
        <Button 
            className={`workspace__header--btn${selected ? "-selected" : ""}`}
            onClick={onClick}
        >
            {children}
        </Button>
    )
}

export const WorkSpaceHeader = ({screen, setScreen}: {screen: number, setScreen: any}) => {
    return (
        <div className="workspace__header">
            <WorkSpaceHeaderButton
                onClick={() => {
                    setScreen(0);
                }}
                selected={screen === 0}
            >
                Research
            </WorkSpaceHeaderButton>
            <WorkSpaceHeaderButton
                onClick={() => {
                    setScreen(1);
                }}
                selected={screen === 1}
            >
                Knowledge
            </WorkSpaceHeaderButton>
        </div>
    )
}

export const WorkSpaceScreen = ({screen}: {screen: number}) => {
    const displayScreen = () => {
        let output = null;
        switch(screen) {
            case 0:
                output = <Research />
            break;

            case 1:
                output = <Knowledge />;
            break;
        }

        return output;
    } 

    let currentScreen = displayScreen();

    return currentScreen && (
        <div className="workspace__screen">
            {currentScreen}
        </div>
    )
}