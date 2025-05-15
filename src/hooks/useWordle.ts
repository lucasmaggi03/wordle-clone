import { useState } from "react";

const useWordle = (solution) => {
    const [turn, setTurn] = useState(0);
    const [currentGuess, setCurrentGuess] = useState("");
    const [guesses, setGuesses] = useState([...Array(6)]);
    const [history, setHistory] = useState<string[]>([]);
    const [isCorrect, setIsCorrect] = useState(false);

    const formatGuess = () => {
        let solutionArray = [...solution];
        let formattedGuess = [...currentGuess].map((l) => {
            return {key: l, color: 'grey'}
        });

        formattedGuess.forEach((l, i)=> {
            if(solutionArray[i] === l.key){
                formattedGuess[i].color = 'green';
                solutionArray[i] = null;
            }
        });

        formattedGuess.forEach((l, i) => {
            if(solutionArray.includes(l.key) && l.color !== 'green')
                formattedGuess[i].color = 'yellow';
                solutionArray[solutionArray.indexOf(l.key)] = null;
        })

        return formattedGuess;
    }

    const addNewGuess = (formattedGuess) => {
        if(currentGuess === solution){
            setIsCorrect(true);
        }
        setGuesses((prevGuesses) =>{
            let newGuesses = [...prevGuesses];
            newGuesses[turn] = formattedGuess;
            return newGuesses;
        })
        setHistory((prevHistory) => {
            return [...prevHistory, currentGuess]
        })
        setTurn((prevTurn) => {
            return prevTurn + 1;
        })
        setCurrentGuess('');
    }

    const handleKeyup = ({key}) => {
        if (key === "Enter"){
            if(turn > 5) {
                console.log("u used all ur guesses")
                return
            }

            if(history.includes(currentGuess)){
                console.log("u already tried that word")
                return
            }

            if(currentGuess.length !== 5){
                console.log("u need to enter a 5 letter word")
                return
            }
            
            const formatted = formatGuess()
            addNewGuess(formatted);
        }

        if(key === 'Backspace'){
            setCurrentGuess((prev) => {
                return prev.slice(0, -1)
            });
        }
        if(/^[A-Za-z]$/.test(key)){
            if(currentGuess.length < 5){
                setCurrentGuess((prev) => {
                    return prev + key
                });
            }
        }
    }

    return {turn, currentGuess, guesses, isCorrect, handleKeyup}

}

export default useWordle;