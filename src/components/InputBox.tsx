import { useState } from "react";
import { parseText } from "../lib/parser";
import "../styles/input_box.scss";

export const InputBox = ({placeholder, dynamic = false}: {placeholder?: string; dynamic?: boolean;}) => {
    const [value, setValue] = useState<string>("");
    const [focused, setFocused] = useState<boolean>(false);

    console.log("test:", value, parseText(value))

    return (dynamic && focused) ? (
        <input 
            type="text"
            className={`input__box ${focused ? "focused" : ""}`}
            value={value} 
            onChange={
                (event: any) => {
                    setValue(event.target.value);
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
                }
            }
        />
    )
}