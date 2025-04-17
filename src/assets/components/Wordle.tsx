import "./Wordle.css";
import { useEffect, useState } from "react";

export function Wordle(){
    const [solution, setSolution] = useState(null);

    useEffect(() => {
        fetch("http://localhost:3001/palabras")
        .then((response) => response.json())
        .then(json => {
            const randomSol = json[Math.floor(Math.random() * json.length)];
            setSolution(randomSol.word)
        })
    }, [setSolution]);

    return(
        <>
            <h1>Wordle Clone</h1>
            {solution && <div>Solution is: {solution}</div>}
        </>
    );
}