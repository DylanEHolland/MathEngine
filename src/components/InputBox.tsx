import { useState } from "react";
import { parseText } from "../lib/parser";
import "../styles/input_box.scss";

export const InputBox = ({placeholder, dynamic = false, onUpdate, initialValue}: {placeholder?: string; dynamic?: boolean; onUpdate?: any; initialValue?: any;}) => {
    const [value, setValue] = useState<string>(initialValue ? initialValue : "");
    const [focused, setFocused] = useState<boolean>(false);

    return (dynamic && focused) ? (
        <input 
            type="text"
            className={`input__box ${focused ? "focused" : ""}`}
            value={value} 
            onChange={
                (event: any) => {
                    setValue(event.target.value);
                    if(onUpdate) 
                        onUpdate(event.target.value)
                }
            }
            onFocus={
                (event: any) => {
                    setFocused(true);
                }
            }
            onBlur={
                (event: any) => {
                    setFocused(false);
                    setValue(event.target.value);
                }
            }
            placeholder={placeholder}
        />
    ) : (
        <input
            className={`input__box input__box--unfocused`}
            onClick={
                (event: any) => {
                    setFocused(true);
                }
            }
            placeholder={!dynamic ? 
                value.length > 0 ? value : placeholder
                : parseText(value)}
            value={!dynamic ? value : parseText(value)}
            onChange={
                (event: any) => {
                    if(!dynamic)
                        setValue(event.target.value);
                        if(onUpdate) 
                            onUpdate(event.target.value)
                }
            }
        />
    )
}