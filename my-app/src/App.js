import Button from "./Button";
import styles from "./App.module.css";

function App() {
  return (
    <div>
      <h1 className={styles.title}>Welcome Back!</h1>
      <Button text={"Continue"} backColor={"pink"} textColor={"white"}/>
    </div>
  );
}

export default App;
