import React, { useState } from 'react'
// import Questions from './QuestionList'
import QuestionList from './QuestionList';
import QuizCSS from './Quiz.css'

   

export default function Quiz() {
    const questions =[
        {
            question: "What is 3*22 ?",
            options:['100','78','33','66'],
            answer:"66"
        },
        {
            question: "What is 2+2 ?",
            options:['3','4','6','2'],
            answer:"4"
        },        
        {
            question: "What is 2+5 ? ",
            options:['3','4','6','7'],
            answer:"7"
        },
        {
            question: "What is 2/0 ?",
            options:['cant tell','0','infinite','not defined'],
            answer:"not defined"
        },
        {
            question: "What is 2*0 ?",
            options:['0','1','2','3'],
            answer:"0"
        }
    ]

    const [currentQuestion,setCurrentQuestion] =useState(0);
    const [currentAnswer,setCurrentAnswer] =useState(null);
    const [score,setScore] =useState(null);

    const handleClick =(option) =>{
        setCurrentAnswer(option);
        if(option === questions[currentQuestion].answer)
        {
            setScore(score+1);
        }

    }

    const handleNextQuestion =() =>{
        setCurrentQuestion(currentQuestion+1);
        setCurrentAnswer(null);
    }
  return (
    <div>
        {currentQuestion< questions.length ?<div>
      <QuestionList 
       question={questions [currentQuestion].question}
       options={questions [currentQuestion].options }
       handleClick={handleClick}     
       currentAnswer={currentAnswer}
      />
      <button disabled ={currentAnswer == null} className={currentAnswer === null ? 'button-disable' : 'button'} onClick={handleNextQuestion}>Next Question</button>
    </div>:<div> Your Score is : <br></br> <b>{score} / {questions.length} </b>
        <br></br>  {score >= 3 ? "Congratulations You are pass ": "Please Try Next Time"}</div>}
      
    </div>
  )
}
