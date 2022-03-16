import ReactDOM from 'react-dom';
import React, {useState} from 'react';
import App from './components/App';


const decks = [
    {title: "React", flashcards: [
        {question: "O que é JSX?", answer: "Uma extensão de linguagem do JavaScript"},
        {question: "O React é __", answer: "uma biblioteca JavaScript para construção de interfaces"},
        {question: "Componentes devem iniciar com __", answer: "letra maiúscula"},
        {question: "Podemos colocar __ dentro do JSX", answer: "expressões"},
        {question: "O ReactDOM nos ajuda __", answer: "interagindo com a DOM para colocar componentes React na mesma"},
        {question: "Usamos o npm para __", answer: "gerenciar os pacotes necessários e suas dependências"},
        {question: "Usamos props para __", answer: "passar diferentes informações para componentes"} ,
        {question: "Usamos estado (state) para __", answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"}
    ]},
    {title: "Os Discípulos", flashcards: [
        {question: "O discípulo mandou era __", answer: "Pedro"} ,
        {question: "O discípulo inteligente foi __", answer: "Paulo"} ,
        {question: "Esse cara traiu Jesus: __", answer: "Judas"} ,
        
    ]}
]



ReactDOM.render(
    <App decks={decks}/>,
    document.querySelector(".root")
)