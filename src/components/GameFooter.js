import React, { useState } from 'react';

export default function GameFooter(props) {

    const gameIsFinished = (props.results.length === props.totalFlashcards);
    const wonTheGame = !(props.results.filter(result => {
        return result === "wrong";
    }).length > 0);

    const won = (<>
        <div className="game__footer__title">
            <img src={`./assets/party.png`} alt="party"></img>
            <h1>PARABÉNS!</h1>
        </div>
        <p className="game__footer__text">Você não esqueceu de nenhum flashcard!</p>
    </>);
    
    const lost = (<>
        <div className="game__footer__title">
            <img src={`./assets/sad.png`} alt="sad"></img>
            <h1>PUTZ!</h1>
        </div>
        <p className="game__footer__text">Ainda faltaram alguns... Mas não desanime!</p></>);
    
    const playing = (<>
        <div className="game__footer__text">{props.results.length + "/" + props.totalFlashcards}</div>
    </>);

    return (
        <div className="game__footer">

            {!gameIsFinished ? playing : (wonTheGame ? won : lost)}

            <div className="game__footer__results">
                {props.results.map((result, idx) => {
                    return (<img key={idx} src={`./assets/${result}.png`} alt={result}></img>)
                })}
            </div>
        </div>)
}