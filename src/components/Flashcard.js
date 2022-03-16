import React, {useState} from 'react';

export default function Flashcard(props) {

    const [canPlay, setCanPlay] = useState(props.isClickable);
    const [showCover, setShowCover] = useState(true);
    const [showQuestion, setShowQuestion] = useState(true);
    const [theAnswerIs, setTheAnswerIs] = useState(props.answerIs);
    const [image, setImage] = useState(getImage(props.asnwerIs));
    const [flashcardCoverClass, setFlashcardCoverClass] = useState(getFlashcardCoverClass(props.asnwerIs));

    function getImage(theAnswerIs) {
        if (theAnswerIs) {
            return theAnswerIs;
        }
        else {
            return "seta";
        }
    }

    function getFlashcardCoverClass(theAnswerIs) {
        if (theAnswerIs) {
            return "cover--answered cover--answered--" + theAnswerIs;
        }
        else {
            return "";
        }
    }

    function answer(flashbackAnswer) {
        setTheAnswerIs(flashbackAnswer);
        setImage(getImage(flashbackAnswer));
        setFlashcardCoverClass(getFlashcardCoverClass(flashbackAnswer));
        setShowCover(true);
    }

    const cover = (
        <div className={"cover " + flashcardCoverClass} onClick={() => {
            console.log("apertou!");
            if(canPlay){
                console.log("entrou!");
                setShowCover(false);
                setCanPlay(false);
            }
        }}>
            <div>{"Pergunta " + (props.index + 1)}</div>
            <img src={`./assets/${image}.png`} alt={image}></img>
        </div>
    )

    const frente = (
        <div className="activeFlashcard" onClick={() => {
            setShowQuestion(false);
        }}>
            <div className="activeFlashcard__text">
                {props.flashcard.question}
            </div>
            <div className="activeFlashcard__footer">
                <div></div>
                <img src="./assets/setinha.png" alt="turn"></img>
            </div>
        </div>
    )

    const verso = (<>
        <div className="activeFlashcard">
            <div className="activeFlashcard__text">
                {props.flashcard.answer}
            </div>
            <div className="activeFlashcard__footer">
                <button className="activeFlashcard__footer__button activeFlashcard__footer__button--wrong" onClick={() => {answer("wrong");}}>Não lembrei</button>
                <button className="activeFlashcard__footer__button activeFlashcard__footer__button--question" onClick={() => {answer("question");}}>Quase não lembrei</button>
                <button className="activeFlashcard__footer__button activeFlashcard__footer__button--right" onClick={() => {answer("right");}}>Zap!</button>
            </div>
        </div>
    </>);

    return (<div className="flashcard">
        {showCover ? (cover) : (showQuestion ? (frente) : (verso))}
    </div>)
}