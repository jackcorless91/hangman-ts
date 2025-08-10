import { useState} from "react";
import words from "./wordList.json"
import {HangmanDrawing} from "./HangmanDrawing.tsx";
import {HangmanWord} from "./HangmanWord.tsx";
import {Keyboard} from "./keyboard.tsx";

function App() {
    const [wordToGuess, setWordToGuess] = useState(() => {
        return words[Math.floor(Math.random() * words.length)]
    })
    const [guessedLetters, setGuessedLetters] = useState<string[]>([])


    return (
        <div
        style={{
            maxWidth: "800px",
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            margin: "0 auto",
            alignItems: "center"
        }}>
        <div style={{ fontSize: "2rem", textAlign: "center" }}>Lose Win</div>
            <HangmanDrawing />
            <HangmanWord />
            <Keyboard />
        </div>
    )
}

export default App
