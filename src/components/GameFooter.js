import React, { useState } from 'react';

export default function GameFooter(props) {

    const gameIsFinished = (props.results.length === props.totalFlashcards);

    console.log("CHECK WON -> target: ", props.target);

    const wonTheGame = (props.results.filter((result, idx) => {
        console.log(idx, result);
        return result === "right";
    }).length >= props.target);
    console.log("ganhou? ", wonTheGame);

    const won = (<>
        <div className="game__footer__title">
            <img src={`./assets/party.png`} alt="party"></img>
            <h1>PARABÉNS!</h1>
        </div>
        <p className="game__footer__text">Você atingiu sua meta!</p>
    </>);
    
    const lost = (<>
        <div className="game__footer__title">
            <img src={`./assets/sad.png`} alt="sad"></img>
            <h1>PUTZ!</h1>
        </div>
        <p className="game__footer__text">Ainda faltaram alguns... Mas não desanime!</p>
    </>);
    
    const playing = (<>
        <div className="game__footer__text">{props.results.length + "/" + props.totalFlashcards + " CONCLUÍDOS"}</div>
    </>);

    const restartButton = (<button className="game__footer__restart" onClick={
        () => {
            props.backToHome();
        }
    }>REINICIAR RECALL</button>)

    return (
        <div className="game__footer">
            {gameIsFinished ? (wonTheGame ? won : lost) : (<></>)}
            {playing}
            <div className="game__footer__results">
                {props.results.map((result, idx) => {
                    return (<img key={idx} src={`./assets/${result}.png`} alt={result}></img>)
                })}
            </div>

            {gameIsFinished ? (restartButton) : (<></>)}

        </div>)
}