import Home from "./Home"
import Game from "./Game"
import React, {useState} from 'react';

export default function App(props) {

    const [gameFlashcards, setGameFlashcards] = useState(newGame(0, 8));
    const [startGame, setStartGame] = useState(false);
    const [targetNumber, setTargetNumber] = useState(8);

    function newGameAnchor (deckIndex, numOfQuestions) {
        setGameFlashcards(newGame(deckIndex, numOfQuestions));
        setTargetNumber(numOfQuestions);
        setStartGame(true);
    }

    function backToHome() {
        setStartGame(false);
    }

    function newGame(deckIndex, numOfQuestions) {
        let gameFlashcards = shuffle([...props.decks[deckIndex].flashcards]);
        return gameFlashcards;
    }

    return (
        <>
        {startGame
        ? <Game backToHome={backToHome} flashcards={gameFlashcards} target={targetNumber}/>
        : <Home parentAnchor={newGameAnchor} decks={props.decks} />}
        </>
    )
}



function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}