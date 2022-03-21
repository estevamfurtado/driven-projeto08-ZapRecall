import React, { useState } from 'react';

export default function Home(props) {

    const deckOptions = props.decks.map((deck, index) => {
        return (<option key={index} value={index}>{deck.title}</option>)
    })

    const [selectedDeck, setSelectedDeck] = useState(0);
    const [numOfQuestions, setNumOfQuestions] = useState(0);
    const [canStartGame, setCanStartGame] = useState(false);

    
    return (<div className="home">

        <div className="home__logo">
            <img src="./assets/logo.png" alt="ZapRecall logo"></img>
            <h1>ZapRecall</h1>
        </div>

        <div className="home__options">
            <select placeholder="Escolha seu deck" className="home__option" name="decks" id="home__options__decks" onChange={
                (e) => {
                    setSelectedDeck(e.target.value)
                }
            }>
                {deckOptions}
            </select>

            <input placeholder="Digite sua meta de zaps..." className="home__option" id="home__options__number" type="number" min={1} max={props.decks[selectedDeck].flashcards.length} onChange={
                e => {
                    setNumOfQuestions(e.target.value);
                    setCanStartGame(true);
                }
            }></input>
        </div>

        <button className="home__start" disabled={!canStartGame} onClick={() => {
            props.parentAnchor(selectedDeck, numOfQuestions);
        }}>Iniciar Recal!</button>
    </div>)
}