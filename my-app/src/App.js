import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick  = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  const iRunOnlyOnce = () => {
    alert(" Hello Runner.")
  }
  useEffect(iRunOnlyOnce, []);
  useEffect(()=>{
    if (keyword !== "" && keyword.length > 5) {
      console.log("Search For ", keyword);
    }
  }, [keyword]);
  useEffect(()=> {
    console.log("add Counter");
  }, [counter])
  return (
    <div>
      <input value={keyword} type="text" placeholder="Search here..." onChange={onChange} />
      <h1 className={styles.title}>Welcome Back!</h1>
      <h2>{counter}</h2>
      <Button text={"Continue"} backColor={"pink"} textColor={"white"}/>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
