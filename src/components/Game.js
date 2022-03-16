import Flashcard from './Flashcard';
import GameFooter from './GameFooter';
import React, {useState} from 'react';

export default function Game(props) {

    console.log('game el!', props.flashcards)

    const [results, changeResults] = useState([]);

    return (<div className="game">

        <div className="game__main">

            <div className="game__logo">
                <img src="./assets/logo-pequeno.png" alt="ZapRecall logo"></img>
                <h1>ZapRecall</h1>
            </div>

            <div className="game__flashcards">
                {props.flashcards.map((flashcard, idx) => {
                    return <Flashcard key={idx} index={idx} flashcard={flashcard} answerIs={"wrong"} isClickable={true} />
                })}
            </div>
            
        </div>
        <GameFooter results={["right", "right", "right", "right", "question", "right", "right", "question"]} totalFlashcards={props.flashcards.length}/>
    </div>)
}