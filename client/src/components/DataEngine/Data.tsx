import { useState } from "react"
import Collection from "./Collection"

export const Data = () => {
    const [dataName, setDataName] = useState<string|null>(null);

    return (
        <div className="data">
            <em>{dataName ? dataName : "Nameless Dataset"}</em>
            
            <Collection />
        </div>
    )
}