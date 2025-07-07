import { useContext } from "react";
import ThemeContext from "../contextes/ThemeContext";

type Props = {
  id: number;
  text: string;
  isChecked: boolean;
  toggleTask: () => void;
}

function Line({ id, text, isChecked, toggleTask}: Props) {
  const theme = useContext(ThemeContext);
    return (
      <>
        <div className="flex items-center gap-2 ">
            <input type="checkbox" 
              className="w-4 h-4"
              id={id.toString()}
              name={id.toString()}
              checked={isChecked}
              onChange={() => toggleTask()}
            />
            <li className={`${theme === "dark" ? "text-white" : "text-black"} ${isChecked ? "line-through text-gray-500" : ""}`}>
              {text}
            </li>
        </div>
      </>
    );
  }
  
  export default Line;