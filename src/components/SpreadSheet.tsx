import { useState } from "react"
import { InputBox } from "./InputBox"
import "../styles/spread_sheet.scss"

function nextLetter(s: any){
    return s.replace(/([a-zA-Z])[^a-zA-Z]*$/, function(a: any){
        var c= a.charCodeAt(0);
        switch(c){
            case 90: return 'A';
            case 122: return 'a';
            default: return String.fromCharCode(++c);
        }
    });
}

export const SpreadSheet = () => {
    const [table, setTable] = useState<any>({
        A: [""]
    });

    const addColumn = () => {
        let newTable = {...table};
        const tableKeys = Object.keys(newTable);
        const lastLetter = tableKeys[tableKeys.length - 1];

        for(let i = 0; i < table[tableKeys[0]].length; i++) {
            if(!newTable[nextLetter(lastLetter)]) 
                newTable[nextLetter(lastLetter)] = []

            newTable[nextLetter(lastLetter)].push("");
        }

        setTable(newTable);
    }

    const addRow = () => {
        let newTable = {...table};

        for(const i in newTable) {
            newTable[i].push("")
        }

        setTable(newTable)
    }

    return (
        <div>
            <div>
                <button onClick={addRow}>Add Row</button>
                <button onClick={addColumn}>Add Column</button>
            </div>
            <br />
            <SpreadSheetTable 
                table={table}
            />
        </div>
    )
}

const SpreadSheetTable = ({table}: {table: any}) => {
    const tableLength = table[Object.keys(table)[0]].length;
    const tableKeys = Object.keys(table);

    return (
        <>
            {table[tableKeys[0]].map(
                (e: any, idx: number) => {
                    return <SpreadSheetRow data={table} id={idx} />
                }
            )}
        </>
    );
}

const SpreadSheetRow = ({data, id}: {data: any, id: number}) => {
    return (
        <div className="spread__sheet--row">
            {Object.keys(data).map(
                (e: any, idx: any) => {
                    return (
                        <SpreadSheetColumn 

                        />
                    )
                }
            )}
        </div>
    )
}

const SpreadSheetColumn = ({}: {}) => {
    return (
        <InputBox 
            dynamic={true}
        />
    )
}