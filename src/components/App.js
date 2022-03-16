import Home from "./Home"
import Game from "./Game"
import React, {useState} from 'react';

export default function App(props) {

    function newGameAnchor (deckIndex, numOfQuestions) {
        setGameFlashcards(newGame(deckIndex, numOfQuestions));
        setStartGame(true);
    }

    function backToHome() {
        setStartGame(false);
    }

    function newGame(deckIndex, numOfQuestions) {
        let gameFlashcards = shuffle([...props.decks[deckIndex].flashcards]);
        if (numOfQuestions < gameFlashcards.length) {
            gameFlashcards = gameFlashcards.slice(0, numOfQuestions);
        }
        return gameFlashcards;
    }

    const [gameFlashcards, setGameFlashcards] = useState(newGame(0, 8));
    const [startGame, setStartGame] = useState(false);



    return (
        <>
        {startGame
        ? <Game backToHome={backToHome} flashcards={gameFlashcards}/>
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