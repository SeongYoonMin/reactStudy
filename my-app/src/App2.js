// use Cleanup

import { useState, useEffect } from "react";

function Hello() {
    function destroyedFn() {
        console.log("Destoryed");
    }
    function effectFn() {
        console.log("Created");
        return destroyedFn;
    }
    useEffect(() => effectFn, [])
    return <h1>Hello</h1>;
}

function App2() {
    const [showing, setShowing] = useState(false);
    const onClick = () => setShowing((prev) => !prev);
    return (
        <div>
            {showing ? <Hello /> : null}
            <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
        </div>
    )
};

export default App2