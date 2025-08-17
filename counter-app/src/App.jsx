import "./App.css";
import { useState, useEffect } from "react";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";

function App() {
  const [count, setCount] = useState(0);
  const handleSetCount = (value) => {
    setCount(count + value);
  };

  useEffect(() => {
    console.log(`count : ${count}`)
  }, [count]);

  // 컴포넌트마다 백그라운드 및 여백 설정 위해 section으로 묶어줌
  return (
      <div className="App">
        <h1>Simple Counter</h1>
        <section>
          <Viewer count={count} />
        </section>
        <section>
          <Controller handleSetCount={handleSetCount} />
        </section>
      </div>
  );
}

export default App;