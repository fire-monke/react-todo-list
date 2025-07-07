import { useContext, useState } from "react";
import ThemeContext from "../contextes/ThemeContext";

type Props = {
  addTask: (task: string) => void;
}

function InputText({ addTask }: Props) {
  const theme = useContext(ThemeContext);

  const [inputValue, setInputValue] = useState<string>("");

  const handleAddClick = () => {
    addTask(inputValue);
    setInputValue("");
  };

  return (
    <>
          <div className="w-full flex flex-row gap-1">
              <input className={`${theme === "dark"? "bg-white caret-[#8A91FF]" : "caret-[#4C53F1]"} w-full border pt-1 pb-1 pr-2 pl-2`}
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Ajouter une nouvelle tâche"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}/>

              <button className={`${theme === "dark" ? "bg-[#8A91FF]" : "bg-[#4C53F1]"} text-white size-8 flex justify-center items-center`}
                    onClick={handleAddClick}>
                    +
              </button>
          </div>
    </>
  );
}
  
  export default InputText;