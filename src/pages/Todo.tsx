import List from "../components/List";
import logoCircleLightAsset from "../assets/CircleLightAsset.png";
import ellipse1 from "../assets/Ellipse1.png";
import ThemeContext from "../contextes/ThemeContext";
import { useState } from "react";

function Todo() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  return (
    <>
      <ThemeContext value={ theme }>
      <div className={`${ theme === 'dark' ? "bg-[#1E1E1E]": "bg-[#FFECD8]" } flex justify-center items-center min-h-screen`}>
          <div className={`${ theme === 'dark' ? "bg-[#2E2E2E]": "bg-[#FFFFFF]" } rounded-sm w-132 h-73 pt-5 pb-5 pr-4 pl-4 drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]`}>
              <h1 className={`${ theme === 'dark' ? "text-white": "text-black" } text-center text-2xl font-bold`}>Ma liste de tâches</h1>
              <List/>
          </div>
          <button onClick={() => { setTheme(theme === 'dark' ? 'light' : 'dark'); }}>
            <img src={ theme === 'dark' ? ellipse1 : logoCircleLightAsset} alt="Y A UNE IMG ICI"/>
          </button>
      </div>
      </ThemeContext>
    </>
  );
}

export default Todo;