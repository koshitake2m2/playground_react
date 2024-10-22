import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { MyButton } from "@pkg/ui/src/my-button";
import { add } from "@pkg/share/src/";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MyButton label="Hello World" />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div>
        <button onClick={() => setCount((count) => add(count, 1))}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
