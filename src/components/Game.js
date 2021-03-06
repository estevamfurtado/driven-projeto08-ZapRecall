import Flashcard from './Flashcard';
import GameFooter from './GameFooter';
import React, {useState} from 'react';

export default function Game({backToHome, flashcards, target}) {

    const [results, setResults] = useState([]);
    const [flashcardsPlayed, setFlashcardsPlayed] = useState([]);

    function addFlashcardResult(flashcardId, result) {
        
        const newResult = [...results];
        newResult.push(result);
        const newFlashcardsPlayed = [...flashcardsPlayed]
        newFlashcardsPlayed.push(flashcardId);

        setResults(newResult);
        setFlashcardsPlayed(newFlashcardsPlayed);
    }

    function checkAnswer(flashcardIndex) {
        let resposta = false;
        flashcardsPlayed.forEach((playedId, idx) => {
            if (playedId === flashcardIndex) {
                resposta = results[idx];
            }
        })
        return resposta;
    }

    return (<div className="game">

        <div className="game__main">

            <div className="game__logo">
                <img src="./assets/logo-pequeno.png" alt="ZapRecall logo"></img>
                <h1>ZapRecall</h1>
            </div>

            <div className="game__flashcards">
                {flashcards.map((flashcard, idx) => {
                    return (<Flashcard
                        fatherAnchor={addFlashcardResult}
                        key={idx} index={idx}
                        flashcard={flashcard}
                        answerIs={checkAnswer(idx)}
                        />)
                })}
            </div>
            
        </div>
        <GameFooter backToHome={backToHome} results={results} totalFlashcards={flashcards.length} target={target}/>
    </div>)
}