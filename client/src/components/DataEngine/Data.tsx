import { useState } from "react"
import Collection from "./Collection"
import "../../styles/data.scss";
import DataObject from "./DataObject";

export const Data = () => {
    const [dataName, setDataName] = useState<string|null>(null);
    const [updatingName, setUpdatingName] = useState<boolean>(false);

    return (
        <div className="data">
            {
                updatingName ? <DataObject value={dataName} /> : <em onClick={() => setUpdatingName(true)}>{dataName ? dataName : "Untitled"}</em>
            }

            <Collection />
        </div>
    )
}