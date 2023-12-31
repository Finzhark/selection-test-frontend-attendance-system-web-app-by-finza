import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDifferentMode from "../change-mode/use-different-mode";
 
export default function Switcher() {
    const [colorTheme, setTheme] = useDifferentMode()
    const [darkSide, setDarkSide] = useState(
        colorTheme === "light" ? true : false
    );
 
    const toggleDarkMode = (checked) => {
        setTheme(colorTheme);
        setDarkSide(checked);
    };
 
    return (
        <div>
            <DarkModeSwitch
                style={{ marginBottom: "2rem" }}
                checked={darkSide}
                onChange={toggleDarkMode}
                size={30}
            />
        </div>
    );
}